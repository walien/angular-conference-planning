'use strict';

angular.module('AngularConferencePlanning')
  .controller('SampleCtrl', function ($scope) {

    angular.extend($scope, {
      eventsList: [
        {
          title: 'Introduction à l\'histoire des sciences',
          type: 'quickie',
          speaker: 'Gérard Blanchard',
          place: 'Amphitheatre A',
          from: '2015-04-12T08:00:00.000+0200',
          to: '2015-04-12T10:10:00.000+0200',
          icon: 'picture1.png'
        },
        {
          title: 'Live coding Restx (Java) / AngularJS',
          type: 'university',
          speaker: 'Gérard Blanchard',
          place: 'Amphitheatre B',
          from: '2015-04-12T09:00:00.000+0200',
          to: '2015-04-12T11:20:00.000+0200',
          icon: 'picture1.png'
        },
        {
          title: 'Histoire Mérovingienne',
          type: 'hands-on',
          speaker: 'Hugh Capet',
          place: 'Amphitheatre C',
          from: '2015-04-12T06:00:00.000+0200',
          to: '2015-04-12T09:30:00.000+0200',
          icon: 'picture1.png'
        },
        {
          title: 'De Zero à Héro avec Spring Boot',
          type: 'university',
          speaker: 'Léon Blum',
          place: 'Grand Amphitheatre',
          from: '2015-04-12T07:00:00.000+0200',
          to: '2015-04-12T10:20:00.000+0200',
          icon: 'picture1.png'
        },
        {
          title: 'Monitorer ses logs avec Elastic Search et Kibana',
          type: 'university',
          speaker: 'John Malkovich',
          place: 'Grand Amphitheatre',
          from: '2015-04-12T11:00:00.000+0200',
          to: '2015-04-12T13:00:00.000+0200',
          icon: 'picture2.png'
        },
        {
          title: 'Cloud direct with Docker',
          type: 'quickie',
          speaker: 'Miles Davis',
          place: 'Amphitheatre A',
          from: '2015-04-12T11:00:00.000+0200',
          to: '2015-04-12T12:00:00.000+0200',
          icon: 'picture3.png'
        },
        {
          title: 'Docker on the rocks',
          type: 'hands-on',
          speaker: 'John Doe',
          place: 'Amphitheatre B',
          from: '2015-04-13T11:00:00.000+0200',
          to: '2015-04-13T12:00:00.000+0200',
          icon: 'picture3.png'
        },
        {
          title: 'Deploy faster on GAE',
          type: 'hands-on',
          speaker: 'Richard Johns',
          place: 'Amphitheatre A',
          from: '2015-04-13T08:00:00.000+0200',
          to: '2015-04-13T11:30:00.000+0200',
          icon: 'picture3.png'
        },
        {
          title: 'Marionette for dumies',
          type: 'university',
          speaker: 'John Doe',
          place: 'Grand Amphitheatre',
          from: '2015-04-13T07:00:00.000+0200',
          to: '2015-04-13T12:00:00.000+0200',
          icon: 'picture3.png'
        }
      ],
      options: {
        oneHourSlotSize: '200px',
        eventClasses: function (event) {
          return [event.type];
        }
      }
    });
  });
