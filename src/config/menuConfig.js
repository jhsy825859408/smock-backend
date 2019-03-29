const menuList = [
    {
        title: 'HomePage',
        key: '/home'
    },
  {
    title: 'EChart',
    key: '/charts',
    children: [
      {
        title: 'Bar',
        key: '/charts/bar'
      },
      {
        title: 'Pie',
        key: '/charts/pie'
      },
      {
        title: 'line',
        key: '/charts/line'
      },
    ]
  },
  {
    title: 'Map',
    key: '/bikeMap'
  },
    {
        title: 'UserInterFace',
        key: '/ui',
        children: [
            {
                title: 'Buttons',
                key: '/ui/buttons',
            },
            {
                title: 'Modals',
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: 'Notification',
                key: '/ui/notification',
            },
            {
                title: 'Message',
                key: '/ui/messages',
            },
            {
                title: 'Tabs',
                key: '/ui/tabs',
            },
            {
                title: 'Gallery',
                key: '/ui/gallery',
            },
            {
                title: 'Carousel',
                key: '/ui/carousel',
            }
        ]
    },
    {
        title: 'Form',
        key: '/form',
        children: [
            {
                title: 'Login',
                key: '/form/login',
            },
            {
                title: 'Register',
                key: '/form/reg',
            }
        ]
    },
    {
        title: 'Table',
        key: '/table',
        children: [
            {
                title: 'BaseTable',
                key: '/table/basic',
            },
            {
                title: 'AdvanceTable',
                key: '/table/high',
            }
        ]
    },
    {
        title: 'RichText',
        key: '/rich'
    },
    {
        title: 'CityControl',
        key: '/city'
    },
    {
        title: 'OrderControl',
        key: '/order',
        btnList: [
            {
                title: 'OrderDetail',
                key: 'detail'
            },
            {
                title: 'FinishOrder',
                key: 'finish'
            }
        ]
    },
    {
        title: 'Staff',
        key: '/user'
    },
    {
        title: 'authority',
        key: '/permission'
    },
];
export default menuList;
