const fs = require("fs");
const path = require("path");
import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/': [
    {
      text: 'Overview',
      children: ['/README.md'],
    },
    {
      text: 'Installing',
      children: ['/Installing.md'],
    },
    {
      text: 'Getting Started',
      children: ['/Getting-started.md', '/GraphQL.md'],
    },
    {
      text: 'Authentication',
      children: ['/Authentication.md'],
    },
    {
      text: 'Queries',
      children: getSideBar('queries', "Queries"),
    },
    {
      text: 'Mutations',
      children: getSideBar('mutations', "Mutations"),
    },
    {
      text: 'Examples',
      children: getSideBar('examples', "Examples"),
    },
  ],
}

function getSideBar(folder: string, text: string) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../../../${folder}`))
    .filter(
      (item) =>
        fs.statSync(path.join(`${__dirname}/../../../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    ).map(item => `/${folder}/${item}`);

  return files;
}
