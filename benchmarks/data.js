window.BENCHMARK_DATA = {
  "lastUpdate": 1778818582931,
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
      },
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
          "id": "ffb03fcbe5d18dff328b5bc7939a9c1892304751",
          "message": "chore: ignore scratch and agent data directories",
          "timestamp": "2026-05-14T11:11:40+05:30",
          "tree_id": "6925d2555212b02cac4bb6b20d3a986cc204aa30",
          "url": "https://github.com/polymit/phantom-engine/commit/ffb03fcbe5d18dff328b5bc7939a9c1892304751"
        },
        "date": 1778737477516,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 740,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 744,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 601,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "session_suspend_resume",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cct_full_1000_nodes",
            "value": 6212373,
            "range": "± 279239",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 3326999,
            "range": "± 47235",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5668,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3287,
            "range": "± 45",
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
            "value": 202047,
            "range": "± 5428",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "e6a8ee0adc84c8d727481be5378673a9e4d03350",
          "message": "chore(net): upgrade http-quik to v0.1.2 for OS-aware transport\n\n- Upgraded http-quik dependency to latest stable version v0.1.2.\n- Implemented dynamic persona-to-platform mapping for Chrome 134 profiles.\n- Enabled OS-aware transport fingerprints (ALPS payloads) for Windows personas.\n- Simplified SmartNetworkClient to leverage host auto-detection by default.\n- Updated .gitignore to exclude scratch/ and .agents/ directories.",
          "timestamp": "2026-05-14T21:20:57+05:30",
          "tree_id": "81cfe52b1790d15374c05040c9d49de6fe3debb5",
          "url": "https://github.com/polymit/phantom-engine/commit/e6a8ee0adc84c8d727481be5378673a9e4d03350"
        },
        "date": 1778774199304,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 716,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 721,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 602,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "session_suspend_resume",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cct_full_1000_nodes",
            "value": 6223546,
            "range": "± 284220",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 3316589,
            "range": "± 67487",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5546,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3287,
            "range": "± 32",
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
            "value": 201449,
            "range": "± 862",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "aa63b563ac34d93676d656d5e6ccb113993caa61",
          "message": "chore(phantom-net):updating http-quik to latest version",
          "timestamp": "2026-05-15T09:40:53+05:30",
          "tree_id": "21e2f8998715c8688eec329e5f2d85f0a5f0ca9c",
          "url": "https://github.com/polymit/phantom-engine/commit/aa63b563ac34d93676d656d5e6ccb113993caa61"
        },
        "date": 1778818582714,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 577,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 585,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 481,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "session_suspend_resume",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cct_full_1000_nodes",
            "value": 6135064,
            "range": "± 113157",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 3356931,
            "range": "± 16415",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5244,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3240,
            "range": "± 12",
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
            "value": 205280,
            "range": "± 1038",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}