import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import AppBar from "@/components/AppBar.vue";

Vue.use(Vuetify);
let wrapper;

describe("AppBar.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(AppBar, {
      propsData: {
        searchUserOption: "username"
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("AppBar renders the same HTML", () => {
    const renderer = createRenderer();
    wrapper.vm.$data.rules = {
      username: jest.fn(),
      fullname: jest.fn()
    };
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
