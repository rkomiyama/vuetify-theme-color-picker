import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer';
import NavDrawerItems from '@/components/NavDrawer/Items/NavDrawerItems.vue'

Vue.use(Vuetify)
let wrapper

describe('NavDrawerItems.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(NavDrawerItems)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it('NavDrawerItems renders the same HTML', () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
})
