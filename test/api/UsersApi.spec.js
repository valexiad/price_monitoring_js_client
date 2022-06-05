/*
 * Price Monitoring Service
 * Price Monitoring Service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PriceMonitoringService);
  }
}(this, function(expect, PriceMonitoringService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PriceMonitoringService.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('usersCreate', function() {
        it('should call usersCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for usersCreate call and complete the assertions
          /*

          instance.usersCreate(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PriceMonitoringService.User);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersList', function() {
        it('should call usersList successfully', function(done) {
          // TODO: uncomment, update parameter values for usersList call and complete the assertions
          /*
          var opts = {};

          instance.usersList(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(PriceMonitoringService.User);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersRetrieve', function() {
        it('should call usersRetrieve successfully', function(done) {
          // TODO: uncomment, update parameter values for usersRetrieve call and complete the assertions
          /*

          instance.usersRetrieve(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PriceMonitoringService.User);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersTrackItemsCreate', function() {
        it('should call usersTrackItemsCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for usersTrackItemsCreate call and complete the assertions
          /*

          instance.usersTrackItemsCreate(body, userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PriceMonitoringService.TrackItemHeader);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersTrackItemsDestroy', function() {
        it('should call usersTrackItemsDestroy successfully', function(done) {
          // TODO: uncomment, update parameter values for usersTrackItemsDestroy call
          /*

          instance.usersTrackItemsDestroy(id, userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersTrackItemsList', function() {
        it('should call usersTrackItemsList successfully', function(done) {
          // TODO: uncomment, update parameter values for usersTrackItemsList call and complete the assertions
          /*

          instance.usersTrackItemsList(userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(PriceMonitoringService.TrackItemHeader);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersTrackItemsPartialUpdate', function() {
        it('should call usersTrackItemsPartialUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for usersTrackItemsPartialUpdate call and complete the assertions
          /*
          var opts = {};

          instance.usersTrackItemsPartialUpdate(id, userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PriceMonitoringService.TrackItemHeader);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersTrackItemsRetrieve', function() {
        it('should call usersTrackItemsRetrieve successfully', function(done) {
          // TODO: uncomment, update parameter values for usersTrackItemsRetrieve call and complete the assertions
          /*

          instance.usersTrackItemsRetrieve(id, userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PriceMonitoringService.TrackItemHeader);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersTrackItemsUpdate', function() {
        it('should call usersTrackItemsUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for usersTrackItemsUpdate call and complete the assertions
          /*

          instance.usersTrackItemsUpdate(body, id, userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PriceMonitoringService.TrackItemHeader);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));