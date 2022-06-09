export function calcCrowDistance(waypoint, nextWaypoint) {
  var lat1 = waypoint.lat;
  var lon1 = waypoint.lon;
  var lat2 = nextWaypoint.lat;
  var lon2 = nextWaypoint.lon;
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d / 1.852;
}
export function calcCourse(waypoint, nextWaypoint) {
  var D8 = waypoint.lat;
  var D9 = nextWaypoint.lat;

  var E8 = waypoint.lon;
  var E9 = nextWaypoint.lon;

  // =MOD(360+DEGREES(ATAN2(COS(RADIANS(D8))*SIN(RADIANS(D9))-SIN(RADIANS(D8))*COS(RADIANS(D9))*COS(RADIANS(E9)-RADIANS(E8)),SIN(RADIANS(E9)-RADIANS(E8))*COS(RADIANS(D9)))),360)

  const MOD = (a, b) => a % b;
  const DEGREES = toDegrees;
  const RADIANS = toRad;
  const ATAN2 = (x, y) => Math.atan2(y, x);
  const COS = Math.cos;
  const SIN = Math.sin;

  return MOD(
    360 +
      DEGREES(
        ATAN2(
          COS(RADIANS(D8)) * SIN(RADIANS(D9)) -
            SIN(RADIANS(D8)) *
              COS(RADIANS(D9)) *
              COS(RADIANS(E9) - RADIANS(E8)),
          SIN(RADIANS(E9) - RADIANS(E8)) * COS(RADIANS(D9))
        )
      ),
    360
  );
}

// Converts numeric degrees to radians
function toRad(v) {
  return (v / 180) * Math.PI;
}

function toDegrees(v) {
  return (v / Math.PI) * 180;
}
