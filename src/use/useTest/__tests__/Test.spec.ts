import { mount, shallowMount } from "@vue/test-utils";
import Test from "../Test.vue";
import { describe, it, expect } from "vitest";
import { reactive, ref } from "vue";

describe("Test", () => {
  it("should create", () => {
    const wrapper = mount(Test);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render has test", () => {
    const wrapper = mount(Test);
    const element = wrapper.find("#hasTest");

    expect(element.exists()).toBe(true);
    expect(element.text()).toBe("false");
  });

  // This test fails
  it("should render changed value of test", () => {
    const wrapper = shallowMount(Test, {
      global: {
        provide: {
          ["InjectionState" as unknown as symbol]: {
            hasTest: ref(true),
          },
        },
      },
    });
    const element = wrapper.find("#hasTest");

    expect(element.text()).toBe("true");
  });
});
