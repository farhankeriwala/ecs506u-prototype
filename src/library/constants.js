// FIREBASE_API_KEY = 'AIzaSyAlBG2AV4CeYHZXbw-xN67nE8764UBGB84';
// FIREBASE_AUTH_DOMAIN = 'ecs506u-prototype-app-3d600.firebaseapp.com';
// FIREBASE_PROJECT_ID = 'ecs506u-prototype-app-3d600';
// FIREBASE_STORAGE_BUCKET = 'ecs506u-prototype-app-3d600.appspot.com';
// FIREBASE_MESSAGING_SENDER_ID = '1090334193424';
// FIREBASE_APP_ID = '1:1090334193424:web:b4f97f45f8771d7c145795';
// FIREBASE_MEASUREMENT_ID = 'G-VJ3J94RF0Q';

const STUDENT_SIDEBAR_LINKS = [
  {
    linkName: "Claim EC",
    linkPath: "/claimEC",
  },
  {
    linkName: "Track My EC",
    linkPath: "/myECs",
  },
  {
    linkName: "Report Service Issue",
    linkPath: "/reportIssue",
  },
];
const ADMIN_SIDEBAR_LINKS = [
  {
    linkName: "Report Service Issue",
    linkPath: "/reportIssue",
  },
  {
    linkName: "Handle Service Issue",
    linkPath: "/handleServiceIssues",
  },
];
const ECADMIN_SIDEBAR_LINKS = [
  {
    linkName: "Track/Handle ECs",
    linkPath: "/trackStudentECs",
  },
  {
    linkName: "Report Service Issue",
    linkPath: "/reportIssue",
  },
];
const STAFF_SIDEBAR_LINKS = [
  {
    linkName: "Track Student ECs",
    linkPath: "/trackStudentECs",
  },
  {
    linkName: "Report Service Issue",
    linkPath: "/reportIssue",
  },
];

export {
  STUDENT_SIDEBAR_LINKS,
  ADMIN_SIDEBAR_LINKS,
  STAFF_SIDEBAR_LINKS,
  ECADMIN_SIDEBAR_LINKS,
};
