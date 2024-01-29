<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

// $routes->group('', ['filter' => 'cors'], function ($routes) {
//   $routes->resource('products');
// });

// $routes->group('api/v1', ['filter' => 'cors'], function ($routes) {
//   $routes->resource('products');
// });

$routes->group('api', ['filter' => 'cors'], function ($routes) {
  $routes->resource('products');
});
