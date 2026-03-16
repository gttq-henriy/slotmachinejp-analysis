import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SlotMachineJP 解析',
  description: 'Rust SlotMachineJP 完全解析 — 設定判別・天井・CZ/AT解析',
  base: '/slotmachinejp-analysis/',
  lang: 'ja',
  head: [
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
  ],
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '基本スペック', link: '/spec' },
      { text: '解析', items: [
        { text: '通常時', link: '/normal' },
        { text: 'CZ解析', link: '/cz' },
        { text: 'AT「7 RUSH」解析', link: '/at' },
        { text: '上乗せ・ボーナス', link: '/bonus' },
      ]},
      { text: '設定判別', link: '/setting' },
      { text: '天井・やめどき', link: '/ceiling' },
    ],
    sidebar: [
      {
        text: '機種情報',
        items: [
          { text: '基本スペック', link: '/spec' },
        ]
      },
      {
        text: '解析情報',
        items: [
          { text: '通常時', link: '/normal' },
          { text: 'CZ「CHANCE ZONE」', link: '/cz' },
          { text: 'AT「7 RUSH」', link: '/at' },
          { text: '上乗せ・ボーナス', link: '/bonus' },
        ]
      },
      {
        text: '攻略情報',
        items: [
          { text: '設定判別', link: '/setting' },
          { text: '天井・やめどき', link: '/ceiling' },
        ]
      }
    ],
    outline: {
      label: '目次',
      level: [2, 3]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '検索' },
          modal: { noResultsText: '結果なし' }
        }
      }
    },
    footer: {
      message: 'Rust サーバー SlotMachineJP 非公式解析サイト',
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },
  }
})
