new Vue({
  el: '#app',
  data: {
    name: '',
    course: '',
    acceptancePeriod: '',
    defaultLastId: 4,
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  methods: {
    addStudent: function() {
      this.students.push({
        id: this.defaultLastId++,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod ,
      });
      this.name = '';
      this.course = '';
      this.acceptancePeriod = '';
    }
  }
})