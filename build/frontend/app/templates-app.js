angular.module('MovieStar.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('app/views/cart.tpl.html','<div class="container">\r\n    <div class="row" ng-repeat="movie in cart.cart">\r\n        <!-- title & price -->\r\n        <div class="cart-article" style="display: inline-block">\r\n            <div class="movie-title">{{movie.title}}</div>\r\n            <div class="movie-price">{{movie.price}}</div>\r\n        </div>\r\n        <!-- delete/remove button -->\r\n        <div class="cart-remove">\r\n            <button class="btn btn-danger" type="button" ng-click="removeMovie(movie)">Remove</button>\r\n        </div>\r\n    </div>\r\n    <!-- switch between "only in cart" and "ordered"-->\r\n    <button class="btn btn-success" type="button" ng-click="postBill()" ng-if="!cart.ordered">Order</button>\r\n    <div ng-if="cart.ordered">You can see your recent orders in your profile page...</div>\r\n</div>\r\n');
$templateCache.put('app/views/login.tpl.html','<div class="container">\r\n    <div class="col-lg-8"></div>\r\n    <div class="col-lg-4 well">\r\n        <div class="alert alert-info">\r\n            Username: test<br/>\r\n            Password: test\r\n        </div>\r\n\r\n        <h2>Login</h2>\r\n\r\n        <form class="form" ng-submit="login(username, password)">\r\n            <div class="form-group" ng-class="{ \'has-error\': form.$submitted && form.username.$invalid }">\r\n                <label for="username">Username</label>\r\n                <input type="text" id="username" class="form-control" placeholder="Username" ng-model="username" required>\r\n                <div ng-messages="form.$submitted && form.username.$error" class="help-block">\r\n                    <div ng-message="required">Username is required</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="form-group" ng-class="{ \'has-error\': form.$submitted && form.password.$invalid }">\r\n                <label for="password">Password</label>\r\n                <input type="password" id="password" class="form-control" placeholder="Password" ng-model="password" required>\r\n                <div ng-messages="form.$submitted && form.password.$error" class="help-block">\r\n                    <div ng-message="required">Password is required</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n                <button type="submit" ng-disabled="vm.loading" ng-click="login(username, password)" class="btn btn-primary">Login</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>');
$templateCache.put('app/views/register.tpl.html','<div class="container">\r\n  <div class="row">\r\n      <form id="register-form" name="registerForm" ng-enter="submitRegistration()">\r\n          <h2>Register</h2>\r\n          <!-- E-Mail -->\r\n          <div class="form-group">\r\n              <label>Email:</label>\r\n              <input class="form-control" type="text" name="email" placeholder="E-Mail" ng-model="user.email" required />\r\n          </div>\r\n\r\n          <!-- Password -->\r\n          <div class="form-group">\r\n              <label>Password:</label>\r\n              <input class="form-control" type="password" name="password" placeholder="Password" ng-model="user.password" required />\r\n          </div>\r\n\r\n          <!-- Confirm Password -->\r\n          <div class="form-group">\r\n              <label>Confirm Password:</label>\r\n              <input class="form-control" type="password" name="password" placeholder="Confirm Password" ng-model="password.confirm" required />\r\n          </div>\r\n\r\n          <!-- First Name & Surname-->\r\n          <div class="form-group">\r\n              <label>Name:</label>\r\n              <input class="form-control" type="text" name="firstName" placeholder="First Name" ng-model="user.firstName" required />\r\n              <input class="form-control" type="text" name="surName" placeholder="Surname" ng-model="user.surName" required />\r\n          </div>\r\n\r\n          <button class="btn btn-success" ng-click="submitRegistration()">Register</button>\r\n          <button class="btn btn-info" ng-click="redirectToLogin()">I already have an Account</button>\r\n      </form>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('app/views/shop.tpl.html','<div class="container">\r\n    <div class="row search-row">\r\n        <input class="form-control" id="search-article" placeholder="Search for anything..." ng-model="searchFilter" type="text" />\r\n    </div>\r\n    <div id="products" class="row list-group">\r\n        <div ng-repeat="movie in movies | filter: searchFilter" class="col-xs-12 col-sm-6 col-md-4 col-lg-3 product-card">\r\n            <div class="thumbnail">\r\n                <img class="group list-group-image" src="http://via.placeholder.com/350x250" alt="" ng-click="redirectToMovieDetail()"/>\r\n                <div class="caption">\r\n                    <h4 class="group inner list-group-item-heading">\r\n                        {{movie.name}}\r\n                    </h4>\r\n                    <p class="group inner list-group-item-text">\r\n                        {{movie.genre}}\r\n                    </p>\r\n                    <div class="row">\r\n                        <div>\r\n                            <p><strong>{{movie.price | currency : "&euro;"}}</strong></p>\r\n                            <button class="btn btn-success btn-cart-mobile" type="button" ng-click="addToCart(movie)"><span class="glyphicon glyphicon-shopping-cart"></span> Add to cart</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n');}]);