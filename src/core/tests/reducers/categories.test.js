import categories from '../../reducers/categories';

test('should set default state', () => {
    const state = categories(undefined, { loading: true, categories: [] });
    expect(state).toEqual({"categories": [], "loading": true});
});

test('should set loading', () => {
    const action = {
      type: 'CATEGORIES_LOADING',
      loading: true
    };
    const state = categories({loading: true}, action);
    expect(state).toEqual({"loading": true});
});