export const pageConfig = {
  searchItems: [
    {
      key: "gpn",
      title: "GPN",
      type: "text",
    },
    {
      key: "staffName",
      title: "Staff Name",
      type: "text",
    },
    {
      key: "cond1",
      title: "查询条件1",
      type: "text",
    },
    {
      key: "type",
      title: "类型",
      type: "select",
      children: [
        {
          label: "类型1",
          value: "1",
        },
        {
          label: "类型2",
          value: "2",
        },
      ],
    },
    {
      key: "date",
      title: "日期",
      type: "date",
    },
    {
      key: "daterange",
      title: "日期范围",
      type: "daterange",
    },
  ],
  table: {
    buttons: ["Add", "Del All", "Upload", "Download"],
    editableField: ["loginName", "email", "createTime"],
    headRow: [
      { title: "登录名", prop: "loginName", type: "text" },
      {
        title: "email",
        prop: "email",
        type: "link",
        path: "router-path?id=itemId", // 配合 link 类型
      },
      { title: "Phone", prop: "phone", type: "text" },
      { title: "createTime", prop: "createTime", type: "date" },
      {
        title: "state",
        prop: "state",
        type: "select",
        children: [
          // 配合 select 类型
          {
            label: "selectItemLabel",
            value: "selectItemValue",
          },
        ],
      },
    ],
    operator: {
      title: "Operations",
      children: ["Edit", "Delete", "View"],
    },
  },
};
export const pageData = {
  records: [
    {
      id: "1",
      loginName: "xx",
      nickname: "",
      email: "xxx.com",
      phone: "",
      state: 1,
      lockState: 0,
      initialPasswdState: 1,
      forceUpdatePasswordFlag: 0,
      createTime: "2021-07-12 16:18:30",
      updateTime: "2021-07-12T16:00:00.000Z",
      headPortrait: "touxiang_7.svg",
      updatePasswdTime: "2021-06-08 17:11:31",
    },
    {
      id: "25",
      loginName: "aa",
      nickname: "aa",
      email: "aaa.com",
      phone: "15302",
      state: 0,
      lockState: 0,
      initialPasswdState: 1,
      forceUpdatePasswordFlag: 0,
      createTime: "2019-03-14 02:04:48",
      updateTime: "2021-06-04 18:30:22",
      headPortrait: "touxiang_7.svg",
      updatePasswdTime: "2021-06-04 18:30:22",
    },
    {
      id: "48",
      loginName: "zz",
      nickname: "zz",
      email: "zz.com",
      phone: "15000000000",
      state: 0,
      lockState: 0,
      initialPasswdState: 0,
      forceUpdatePasswordFlag: 0,
      createTime: "2019-07-20 07:51:21",
      updateTime: "2021-06-02 22:14:04",
      headPortrait: "touxiang_7.svg",
      jobNumber: "123123123",
      updatePasswdTime: "2021-05-31 15:57:40",
    },
    {
      id: "49",
      loginName: "bb",
      nickname: "bb",
      email: "bb.com",
      phone: "175555555",
      state: 0,
      lockState: 0,
      initialPasswdState: 0,
      forceUpdatePasswordFlag: 0,
      createTime: "2019-07-12 23:58:10",
      updateTime: "2021-06-11 15:44:49",
      headPortrait: "touxiang_7.svg",
      jobNumber: "fwe3242342",
      updatePasswdTime: "2021-09-10 07:04:26",
    },
    {
      id: "62",
      loginName: "dd",
      nickname: "ddd",
      email: "dd.com",
      phone: "12000000",
      state: 0,
      lockState: 0,
      initialPasswdState: 0,
      forceUpdatePasswordFlag: 0,
      createTime: "2019-08-08 22:26:41",
      updateTime: "2021-06-11 15:14:39",
      headPortrait: "touxiang_7.svg",
      jobNumber: "62uio",
      updatePasswdTime: "2021-06-03 18:50:25",
    },
    {
      id: "63",
      loginName: "cc",
      nickname: "cc",
      email: "ccc.com",
      phone: "16300000",
      state: 0,
      lockState: 0,
      initialPasswdState: 0,
      forceUpdatePasswordFlag: 0,
      createTime: "2019-08-12 17:09:03",
      updateTime: "2021-06-05 01:54:16",
      headPortrait: "touxiang_7.svg",
      jobNumber: "CN0539655",
      updatePasswdTime: "2021-05-27 17:53:08",
    },
    {
      id: "34",
      loginName: "ee",
      nickname: "",
      email: "ee.com",
      phone: "",
      state: 0,
      lockState: 0,
      initialPasswdState: 0,
      forceUpdatePasswordFlag: 0,
      createTime: "2021-06-08 15:02:55",
      updateTime: "2021-06-08 17:53:47",
      headPortrait: "touxiang_7.svg",
      updatePasswdTime: "2021-06-08 17:53:13",
    },
    {
      id: "erlgff",
      loginName: "mm",
      nickname: "",
      email: "mm.com",
      phone: "",
      state: 1,
      lockState: 0,
      initialPasswdState: 1,
      forceUpdatePasswordFlag: 0,
      createTime: "2021-06-07 15:44:23",
      updateTime: "2021-06-07 15:44:23",
      headPortrait: "touxiang_7.svg",
      updatePasswdTime: "2021-06-07 15:44:23",
    },
    {
      id: "ff",
      loginName: "ff",
      nickname: "ff",
      email: "ff.com",
      phone: "11111111111111111111",
      state: 0,
      lockState: 0,
      initialPasswdState: 0,
      forceUpdatePasswordFlag: 0,
      createTime: "2021-01-18 14:30:30",
      updateTime: "2021-06-11 16:07:06",
      headPortrait: "touxiang_7.svg",
      jobNumber: "test1",
      updatePasswdTime: "2021-04-19 15:58:02",
    },
    {
      id: "ww",
      loginName: "ww",
      nickname: "",
      email: "ww.com",
      phone: "13000000",
      state: 1,
      lockState: 0,
      initialPasswdState: 1,
      forceUpdatePasswordFlag: 0,
      createTime: "2021-06-04 19:01:35",
      updateTime: "2021-06-04 19:01:35",
      headPortrait: "touxiang_7.svg",
      updatePasswdTime: "2021-06-04 19:01:35",
    },
  ],
  total: 13,
  size: 10,
  current: 1,
  orders: [],
  optimizeCountSql: true,
  hitCount: false,
  searchCount: true,
  pages: 2,
};
