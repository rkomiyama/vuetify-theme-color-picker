import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer';
import SearchListGroup from '@/components/NavDrawer/Items/SearchListGroup.vue'

Vue.use(Vuetify)
let wrapper

describe('SearchListGroup.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchListGroup)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it('SearchListGroup renders the same HTML', () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
})
