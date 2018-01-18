"use strict";

const Config = {
  onePageNums: 6,
  types: ['JavaScript', 'Node.js', 'Python2', 'Python3', 'C#', 'Android', 'ArcGIS', 'SuperMap', '其他'],
  items: [
    {
      title: '内网穿透',
      imgsrc: './static/data/img/nat.png',
      src: './static/data/md/nat.md',
      time: '2017年9月19日',
      abstract: '内网穿透即NAT穿透，网络连接时术语，计算机是局域网内时，外网与内网的计算机节点需要连接通信，有时就会出现不支持内网穿透。',
      type: '内网穿透'
    },
    {
      title: '个人简历模板',
      imgsrc: './static/data/img/resumeDemo.png',
      src: './static/data/md/resumeDemo.md',
      time: '2017年9月19日',
      abstract: '简历模板（ResumeDemo）是一个基于Vue.js开发的简单个人简历生成器。他可以在线制作个人简历，并能在线打印或另存为PDF文件。',
      type: 'JavaScript'
    },
    {
      title: '个人博客',
      imgsrc: './static/data/img/blog.png',
      src: './static/data/md/blog.md',
      time: '2017年6月1日',
      abstract: '个人博客（Blog）是一个基于Vue.js开发的个人主页。用于记录个人感兴趣的技术，发布自己的作品等等。该应用做了全局自适应...',
      type: 'JavaScript'
    },
    {
      title: 'How I Rest From Work2',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/2.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'JavaScript'
    },
    {
      title: 'How I Rest From Work3',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/3.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'Python2'
    },
    {
      title: 'How I Rest From Work4',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/4.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'C#'
    },
    {
      title: 'How I Rest From Work5',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/1.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'JavaScript'
    },
    {
      title: 'How I Rest From Work6',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/2.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'JavaScript'
    },
    {
      title: 'How I Rest From Work7',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/3.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'Python2'
    },
    {
      title: 'How I Rest From Work8',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/4.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'C#'
    },
    {
      title: 'How I Rest From Work9',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/1.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'JavaScript'
    },
    {
      title: 'How I Rest From Work10',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/2.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'JavaScript'
    },
    {
      title: 'How I Rest From Work11',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/3.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'Python2'
    },
    {
      title: 'How I Rest From Work12',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/4.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'C#'
    },
    {
      title: 'How I Rest From Work13',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/1.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'JavaScript'
    },
    {
      title: 'How I Rest From Work14',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/2.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'JavaScript'
    },
    {
      title: 'How I Rest From Work15',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/3.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'Python2'
    },
    {
      title: 'How I Rest From Work16',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/4.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'C#'
    },
    {
      title: 'How I Rest From Work17',
      imgsrc: './static/data/img/i-rest.jpg',
      src: './static/data/md/4.md',
      time: '2017, Sep 12   — ',
      abstract: 'Fam locavore snackwave bushwick +1 sartorial. Selfies portland knausgaard synth. Pop-up art party marfa deep...',
      type: 'C#'
    }
  ]
}

