var app = new Vue({
  el: "#app",
  data: {
    job_name: "",
    CATEGORIES: "",
    SUB_JOBS: [],
    TOTAL: 0,
    id: 1,
  },
  mounted: function () {
    this.SUB_JOBS.push({
      id: 1,
      base: 0,
      advanced: 0,
      cost: 0,
      notes: "",
      cat_ref: "",
      url: "_img/new_job/89293416_2845746348848190_2139080574550147072_n.png",
    });

    this.check_user();
    this.initial();
  },
  methods: {
    check_user: function () {
      axios.get("server/user_data.php?Command=check").then((response) => {
        const check = response.data[0];

        console.log(check);
      });
    },
    initial: function () {
      axios.get("server/new_job_data.php?Command=generate").then((response) => {
        this.CATEGORIES = response.data[0];
      });
    },
    editingCategory: function (sub_job, flag) {
      if (flag == "base") {
        sub_job.base = 1;
        sub_job.advanced = 0;
        sub_job.cost = 12;
      } else {
        sub_job.advanced = 1;
        sub_job.base = 0;
        sub_job.cost = 23;
      }

      this.makeTotal();
    },
    setCategory: function (sub_job, ref, cost) {
      sub_job.cat_ref = ref;
      sub_job.cost = cost;
      this.makeTotal();
    },
    makeTotal: function () {
      var total = 0;
      for (let index = 0; index < this.SUB_JOBS.length; index++) {
        total = total + parseFloat(this.SUB_JOBS[index].cost) || 0;
      }
      this.TOTAL = total;
    },
    addImage: function () {
      var temp_id = this.id;
      ++temp_id;
      this.id = temp_id;
      this.SUB_JOBS.push({
        id: this.id,
        base: 0,
        advanced: 0,
        cost: 0,
        notes: "",
        url: "_img/new_job/89293416_2845746348848190_2139080574550147072_n.png",
      });
    },
    removeImage: function (id) {
      if (this.SUB_JOBS.length != 1) {
        temp_subjobs = [];
        for (let index = 0; index < this.SUB_JOBS.length; index++) {
          if (this.SUB_JOBS[index].id == id) {
          } else {
            temp_subjobs.push(this.SUB_JOBS[index]);
          }
        }
        this.SUB_JOBS = temp_subjobs;
      } else {
        alert("fhdsuigh");
      }

      this.makeTotal();
    },
  },
});

document.getElementById("pill-1").style.color = "black";
document.getElementById("pill-2").style.color = "black";
document.getElementById("pill-3").style.color = "black";
document.getElementById("pill-4").style.color = "black";

function openNav() {
  document.getElementById("myNav").style.width = "100%";

  document.getElementById("pill-1").style.color = "#818181";
  document.getElementById("pill-2").style.color = "#818181";
  document.getElementById("pill-3").style.color = "#818181";
  document.getElementById("pill-4").style.color = "#818181";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("pill-1").style.color = "black";
  document.getElementById("pill-2").style.color = "black";
  document.getElementById("pill-3").style.color = "black";
  document.getElementById("pill-4").style.color = "black";
}
