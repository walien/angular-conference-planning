'use strict';

angular.module('AngularConferencePlanning')
  .directive('conferencePlanning', function () {

    var throwInvalidEventDef = function (_event, cause) {
      throw new Error('invalid event definition (' + cause + ') => ' + JSON.stringify(_event));
    };

    var computeWidth = function (_event, options) {

      var eventStart = moment(_event.from);
      var eventEnd = moment(_event.to);

      var elapsedSeconds = eventEnd.diff(eventStart, 'seconds');
      console.log(elapsedSeconds);

      // By default a slot of 3600 seconds is represented by 200px (may be configured)
      // 200 px => 3600 seconds
      // ?   px => { elapsedSeconds } seconds
      return (options.oneHourSlotPxSize * elapsedSeconds) / 3600;
    };

    var computeMargin = function (_event, options) {

      var eventStart = moment(_event.from);
      var beginningOfTheDay = moment(_event.from).hours(options.slots.from).minutes(0).seconds(0).milliseconds(0);

      var elapsedSeconds = eventStart.diff(beginningOfTheDay, 'seconds');

      // By default a slot of 3600 seconds is represented by 200px (may be configured)
      // 200 px => 3600 seconds
      // ?   px => { elapsedSeconds } seconds
      return ((options.oneHourSlotPxSize * elapsedSeconds) / 3600) + 150;
    };

    var transform = function (_events) {

      // Transform provided events into this model structure
      // some dates => some places => some events

      var model = {
        lanes: {},
        dates: {}
      };

      _.each(_events, function (_event) {

        if (!_event.from || !_event.to || !_event.place) {
          throwInvalidEventDef(_event, 'some attributes are missing');
        }

        var from = moment(_event.from);
        var to = moment(_event.to);
        var fromStr = from.format('YYYY-MM-DD');
        var toStr = to.format('YYYY-MM-DD');

        // Event is not on the same day
        if (fromStr != toStr) {
          // TODO
        } else {
          if (!model.lanes[fromStr]) model.lanes[fromStr] = {};
          if (!model.lanes[fromStr][_event.place]) model.lanes[fromStr][_event.place] = [];
          model.lanes[fromStr][_event.place].push(_event);
        }

        model.dates = _.keys(model.lanes);

      });

      return model;
    };

    return {
      scope: {
        events: '=',
        options: '='
      },
      templateUrl: 'views/ConferencePlanning.html',
      controller: function ($scope) {

        $scope.loadDate = function (date) {
          if (date) {
            $scope.lanes = $scope.model.lanes[date];
          }
        };

        $scope.computeEventStyle = function (event) {
          var margin = computeMargin(event, $scope.options);
          var width = computeWidth(event, $scope.options);
          return {'margin-left': margin + 'px', 'width': width + 'px'};
        };

        $scope.$watchCollection('events', function (_events) {

          if (!_events || _.isEmpty(_events)) {
            return;
          }

          var model = $scope.model = transform($scope.events);
          $scope.loadDate(model.dates[0]);

        });
      },
      link: function (scope) {

        if (!scope.options) scope.options = {};
        if (!scope.options.oneHourSlotPxSize) scope.options.oneHourSlotPxSize = 200;
        if (!scope.options.slots) scope.options.slots = {};
        if (!scope.options.slots.from) scope.options.slots.from = 8;
        if (!scope.options.slots.to) scope.options.slots.to = 19;

        scope.axes = {
          X: []
        };

        var from = scope.options.slots.from;
        var to = scope.options.slots.to;
        for (var i = from; i <= to;) {
          scope.axes.X.push(i++);
        }
      }
    };

  });
