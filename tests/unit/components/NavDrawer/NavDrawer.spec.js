import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer';
import NavDrawer from '@/components/NavDrawer/NavDrawer.vue'

Vue.use(Vuetify)
let wrapper

describe('NavDrawer.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(NavDrawer)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    const wrapper = shallowMount(NavDrawer)
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it('NavDrawer renders the same HTML', () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
})
