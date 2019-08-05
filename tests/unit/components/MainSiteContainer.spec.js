import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount } from "@vue/test-utils";
import { createRenderer } from "vue-server-renderer";
import MainSiteContainer from "@/components/MainSiteContainer.vue";

Vue.use(Vuetify);
let wrapper;

describe("MainSiteContainer.vue", () => {
  beforeEach(() => {
    wrapper = shallowMount(MainSiteContainer);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("MainSiteContainer renders the same HTML", () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
