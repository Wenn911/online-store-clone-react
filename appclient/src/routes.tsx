const prefix = 'api/';

const routes = {
    admin: () => [prefix, 'admin'].join('/'),
    homePage: () => '/',
    notFoundPage: () => '*',
    basket: () => '/basket',
};

export default routes;
