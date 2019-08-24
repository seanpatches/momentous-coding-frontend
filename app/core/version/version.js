'use strict';

angular.module('momentousApp.version', [
  'momentousApp.version.interpolate-filter',
  'momentousApp.version.version-directive'
])

.value('version', '0.1');
