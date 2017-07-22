(function() {

  var reloadbtn = document.getElementById('reloadbtn');
  reloadbtn.onclick = function() {
    window.location.reload(false);
  };

  var dropdown = document.getElementById('dropdown');
  dropdown.onchange = function() {
    window.location = this.options[dropdown.selectedIndex].value;
  };



  var playbtn = document.getElementById('playbtn');
  var status = document.getElementById('status');
  var info = document.getElementById('info');

  // wrap testbed with ui
  var _testbed = planck.testbed;
  planck.testbed = function(opts, callback) {
    _testbed(opts, function(testbed) {
      
      playbtn.onclick = function() {
        testbed.isPaused() ? testbed.resume() : testbed.pause();
      };

      testbed._pause = function() {
        playbtn.className = playbtn.className.replace('fa-pause', 'fa-play');
      };

      testbed._resume = function() {
        playbtn.className = playbtn.className.replace('fa-play', 'fa-pause');
      };

      status.innerText = '';
      info.innerText = '';

      var _lastStatus = '';
      var _lastInfo = '';

      testbed._status = function(statusText, statusMap) {
        var newline = '\n';
        var string = statusText || '';
        for (var key in statusMap) {
          var value = statusMap[key];
          if (typeof value === 'function') continue;
          string += (string && newline) + key + ': ' + value;
        }

        if (_lastStatus !== string) {
          status.innerText = _lastStatus = string;
        }
      };

      testbed._info = function(text) {
        if (_lastInfo !== text) {
          info.innerText = _lastInfo = text;
        }
      };

      var world = callback.apply(null, arguments);

      testbed.resume();

      return world;
    });
  };

})();
