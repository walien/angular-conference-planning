'use strict';

angular.module('AngularConferencePlanning')
  .controller('SampleCtrl', function ($scope) {

    angular.extend($scope, {
      eventsList: [
        {
          title: 'De Zero à Héro avec Spring Boot',
          place: 'Grand Amphitheatre',
          from: '2015-04-12T09:00:00.000Z',
          to: '2015-04-12T10:00:00.000Z',
          icon: 'picture1.png'
        },
        {
          title: 'Monitorer ses logs avec Elastic Search et Kibana',
          place: 'Grand Amphitheatre',
          from: '2015-04-12T11:00:00.000Z',
          to: '2015-04-12T12:00:00.000Z',
          icon: 'picture2.png'
        },
        {
          title: 'Cloud direct with Docker',
          place: 'Amphitheatre A',
          from: '2015-04-12T11:00:00.000Z',
          to: '2015-04-12T12:00:00.000Z',
          icon: 'picture3.png'
        },
        {
          title: 'Cloud direct with Docker 2',
          place: 'Amphitheatre A',
          from: '2015-04-13T11:00:00.000Z',
          to: '2015-04-13T12:00:00.000Z',
          icon: 'picture3.png'
        }
      ],
      options: {
        oneHourSlotPxSize: '100'
      }
    });
  });
