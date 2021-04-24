const menuList = [
    {
        title: ' 人员管理',
        key: '/admin/person_manage',
        icon: 'area-chart',
        children: [
            {
                title: ' 用户管理',
                key: '/admin/person_manage/user_manage',
                icon: 'bar-chart'
            },
            {
                title: ' 角色管理',
                key: '/admin/person_manage/role_manage',
                icon: 'line-chart'
            },
            {
                title: ' 权限管理',
                key: '/admin/person_manage/authority_manage',
                icon: 'pie-chart'
            },
            {
                title: ' 修改密码',
                key: '/admin/person_manage/password_change',
                icon: 'pie-chart'
            },
        ]
    },
    {
        title: ' 食堂管理',
        key: '/admin/canteen_manage',
        icon: 'appstore',
        children: [ // 子菜单列表
            {
                title: ' 餐馆管理',
                key: '/admin/canteen_manage/catering_manage',
                icon: 'bars'
            },
            {
                title: ' 原材料管理',
                key: '/admin/canteen_manage/material_manage',
                icon: 'tool'
            },
            {
                title: ' 采购管理',
                key: '/admin/canteen_manage/purchase_manage',
                icon: 'tool'
            }
        ]
    },
    {
        title: ' 检测管理',
        key: '/admin/testing_manage',
        icon: 'area-chart',
        children: [
            {
                title: ' 检测指标管理',
                key: '/admin/testing_manage/rules_manage',
                icon: 'bar-chart'
            },
            {
                title: ' 食材检测管理',
                key: '/admin/testing_manage/food_manage',
                icon: 'line-chart'
            },
            {
                title: ' 检测清单管理',
                key: '/admin/testing_manage/testList_manage',
                icon: 'pie-chart'
            },
        ]
    },
]
export default menuList