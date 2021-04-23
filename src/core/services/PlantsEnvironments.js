import HttpClient from '../HttpClient';

export default {
  async list({
    environment = '',
    page = 1,
    limit = 10,
    sort = 'name',
    order = 'asc',
  } = {}) {
    const params = {
      _page: page,
      _limit: limit,
      _sort: sort,
      _order: order,
      environments_like: environment,
    };
    const { data } = await HttpClient.get('/plants', params);
    return data;
  },
  async listEnvironments() {
    const { data } = await HttpClient.get('/plants_environments');
    return data;
  },
};
