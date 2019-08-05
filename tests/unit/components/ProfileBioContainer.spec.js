import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer';
import faker from 'faker/locale/en_US'
import ProfileBioContainer from '@/components/ProfileBioContainer.vue'

Vue.use(Vuetify)
let wrapper
faker.seed(42)

describe('ProfileBioContainer.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(
      ProfileBioContainer, {
        propsData: {
          user: {
            name: faker.name.findName(),
            login: faker.internet.userName(),
            avatar_url: faker.internet.url(),
            html_url: faker.internet.url(),
            public_repos: faker.random.number(),
            created_at: "2010-07-28T22:19:56Z"
          }
        }
      }
    );
  });

  afterEach(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it('ProfileBioContainer renders the same HTML', () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
})
