import category from '../../reducers/category';

test('should set default state', () => {
    const state = category(undefined, { loading: true, categories: {} });
    expect(state).toEqual({"category": null, "loading": true});
});

test('should set loading', () => {
    const action = {
      type: 'CATEGORY_LOADING',
      loading: true
    };
    const state = category({loading: true}, action);
    expect(state).toEqual({"loading": true});
});