window.BENCHMARK_DATA = {
  "lastUpdate": 1778736422581,
  "repoUrl": "https://github.com/polymit/phantom-engine",
  "entries": {
    "Phantom Engine Performance Firewall": [
      {
        "commit": {
          "author": {
            "email": "polymit.main@gmail.com",
            "name": "polymit",
            "username": "polymit-hq"
          },
          "committer": {
            "email": "polymit.main@gmail.com",
            "name": "polymit",
            "username": "polymit-hq"
          },
          "distinct": true,
          "id": "696855fd2a165b56a32160109503002567e6ecf9",
          "message": "ci: trigger test run for phantom-docs redirection",
          "timestamp": "2026-05-14T10:54:10+05:30",
          "tree_id": "b05273e87c00a4d3e0de445a9f6821c385b1478f",
          "url": "https://github.com/polymit/phantom-engine/commit/696855fd2a165b56a32160109503002567e6ecf9"
        },
        "date": 1778736422424,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 579,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 588,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 486,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "session_suspend_resume",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cct_full_1000_nodes",
            "value": 6136541,
            "range": "± 19208",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 3383180,
            "range": "± 18120",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5322,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3288,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "v8_eval_simple",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "pool_acquire_tier1",
            "value": 203366,
            "range": "± 1742",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}