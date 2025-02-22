import { Navigation } from 'src/app/@theme/types/navigation';

export const menus: Navigation[] = [
  {
    id: 'navigation',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Dashboard',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: '#custom-status-up'
      }
    ]
  },

  {
    id: 'ui',
    title: 'UI Components',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'masters',
        title: 'Masters',
        type: 'collapse',
        icon: '#custom-level',
        children: [
          {
            id: 'userlist',
            title: 'User List',
            type: 'item',
            url: 'javascript:'
          },
          {
            id: 'systemcode',
            title: 'System Code',
            type: 'item',
            url: 'javascript:'
          },

        ]
      },
      {
        id: 'studentmangement',
        title: 'Student Management',
        type: 'collapse',
        icon: '#custom-level',
        children: [
          {
            id: 'addmission',
            title: 'Addmission',
            type: 'item',
            url: 'component/addmission'
          },
          {
            id: 'allstudent',
            title: 'All Student List',
            type: 'item',
            url: 'javascript:'
          },

        ]
      },
      {
        id: 'attendance',
        title: 'Attendance Management',
        type: 'collapse',
        icon: '#custom-level',
        children: [
          {
            id: 'timetable',
            title: 'Time Table',
            type: 'item',
            url: 'javascript:'
          },
          {
            id: 'Daily Attendance',
            title: 'All Student List',
            type: 'item',
            url: 'javascript:'
          },

        ]
      },

    ]
  }
];
