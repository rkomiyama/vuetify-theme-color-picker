import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer';
import NavDrawerTitle from '@/components/NavDrawer/NavDrawerTitle.vue'

Vue.use(Vuetify)
let wrapper

describe('NavDrawerTitle.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(NavDrawerTitle)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it('NavDrawerTitle renders the same HTML', () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
})
