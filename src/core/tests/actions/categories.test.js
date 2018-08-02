import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from '../../actions/categories';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getCategories actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates categoriesSuccess after successfuly fetching categories', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [],
      });
    });

    const expectedActions = [
      { type: actions.CATEGORIES_LOADING },
      { type: actions.categoriesSuccess, categories: ['foo', 'bar'] },
    ];

    const store = mockStore({ posts: {} })

    return store.dispatch(actions.getCategories()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});