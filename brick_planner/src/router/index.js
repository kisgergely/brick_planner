import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Settings from '@/components/Settings'
import ProjectsTable from '@/components/ProjectsTable'
import ResourceTable from '@/components/ResourceTable'
import Timesheet from '@/components/Timesheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: 'projectstable',
          name: 'ProjectsTable',
          component: ProjectsTable
        },
        {
          path: 'resourcetable',
          name: 'ResourceTable',
          component: ResourceTable
        },
        {
          path: 'timesheet',
          name: 'Timesheet',
          component: Timesheet
        }
      ]
    }
  ]
})
