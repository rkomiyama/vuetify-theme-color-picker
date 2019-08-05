import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer';
import AppBar from '@/components/AppBar.vue'

Vue.use(Vuetify)
let wrapper
const username = "rkomiyama"

describe('AppBar.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AppBar, {
      propsData: {
        searchUserOption: "username"
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it('has a search field', () => {
    const searchField = wrapper.find('[data-test="searchFieldTest"]')
    expect(searchField).toBeTruthy()
  })

  it('has a rule for username search', () => {
    const str = 'Invalid username.'
    expect(wrapper.vm.$data.rules.username('rkomiyama')).toBeTruthy()
    expect(wrapper.vm.$data.rules.username('-')).toEqual(str)
    expect(wrapper.vm.$data.rules.username('-r')).toEqual(str)
    expect(wrapper.vm.$data.rules.username('r-')).toEqual(str)
    expect(wrapper.vm.$data.rules.username('-r-')).toEqual(str)
  })

  it('has a rule for fullname search', () => {
    expect(wrapper.vm.$data.rules.fullname()).toBeTruthy()
  })

  it('calls changeUser', () => {
    wrapper.vm.$data.searchField = username
    wrapper.vm.changeUser()
    expect(wrapper.vm.$data.oldSearchField).toEqual(username)
  })

  it('calls turnUserChangeOn', () => {
    wrapper.vm.$data.userChange = false
    wrapper.vm.changeUser()
    expect(wrapper.vm.$data.userChange).toBeTruthy()
  })

  it('calls clearSearchField', () => {
    wrapper.vm.$data.searchField = username
    wrapper.vm.clearSearchField()
    expect(wrapper.vm.$data.searchField).toBeFalsy()
  })

  it('AppBar renders the same HTML', () => {
    const renderer = createRenderer();
    wrapper.vm.$data.rules = {
      username: jest.fn(),
      fullname: jest.fn()
    }
    renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
})
