window.BENCHMARK_DATA = {
  "lastUpdate": 1781519639917,
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
          "id": "e69d1342517084f4bb8fbce12d69958fa85ad01f",
          "message": "fix(engine): harden navigation, memory, and interaction layers\n\nThis commit addresses four critical reliability bugs:\n\n1. Memory: Implements dynamic QuickJS heap scaling (up to 256MB) to\n   resolve js_out_of_memory panics on dense DOM structures.\n2. Interaction: Implements a navigation bridge and auto-scroll for\n   browser_click, ensuring links are traversed and off-screen\n   elements are visible before event dispatch.\n3. Scrolling: Implements manual viewport mutation for keyboard\n   navigation keys (PageDown, Space, etc.) to ensure scroll sync.\n4. Culling: Relaxes Selective mode culling with a 2000px vertical\n   buffer and refined relevance heuristics to prevent empty graphs.\n\nAlso updates the layout pipeline to calculate document boundaries\n(total_width/height) for accurate scroll clamping.",
          "timestamp": "2026-05-15T12:20:26+05:30",
          "tree_id": "cb591baef0e1ec14d9107fb14d380b44e60b42bc",
          "url": "https://github.com/polymit/phantom-engine/commit/e69d1342517084f4bb8fbce12d69958fa85ad01f"
        },
        "date": 1778828126138,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 552,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 557,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 468,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_suspend_resume",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cct_full_1000_nodes",
            "value": 4831318,
            "range": "± 38968",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 3154212,
            "range": "± 12306",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 4249,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 2587,
            "range": "± 86",
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
            "value": 155219,
            "range": "± 782",
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
          "id": "a9bcd51ec053d6aa74bc591d81072afd24cbb319",
          "message": "fix(engine): harden navigation and memory; update security tests\n\nThis commit addresses four critical reliability bugs:\n\n1. Memory: Implements dynamic QuickJS heap scaling (up to 256MB) to\n   resolve js_out_of_memory panics on dense DOM structures.\n2. Interaction: Implements a navigation bridge and auto-scroll for\n   browser_click, ensuring links are traversed and off-screen\n   elements are visible before event dispatch.\n3. Scrolling: Implements manual viewport mutation for keyboard\n   navigation keys (PageDown, Space, etc.) to ensure scroll sync.\n4. Culling: Relaxes Selective mode culling with a 2000px vertical\n   buffer and refined relevance heuristics to prevent empty graphs.\n\nAlso updates security_audit_test.rs to request 512MB for OOM\nverification, ensuring the memory limit is still enforced under\nthe new 256MB default.",
          "timestamp": "2026-05-15T12:30:57+05:30",
          "tree_id": "e7e80a10e0163870a2f7c9c00a057bc84ffc9697",
          "url": "https://github.com/polymit/phantom-engine/commit/a9bcd51ec053d6aa74bc591d81072afd24cbb319"
        },
        "date": 1778828626014,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 435,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 440,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 347,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "session_suspend_resume",
            "value": 92,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "cct_full_1000_nodes",
            "value": 5720041,
            "range": "± 53052",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 3818153,
            "range": "± 14794",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5242,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3098,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "v8_eval_simple",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "pool_acquire_tier1",
            "value": 218002,
            "range": "± 1685",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "committer": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "id": "a9bcd51ec053d6aa74bc591d81072afd24cbb319",
          "message": "fix(engine): harden navigation and memory; update security tests\n\nThis commit addresses four critical reliability bugs:\n\n1. Memory: Implements dynamic QuickJS heap scaling (up to 256MB) to\n   resolve js_out_of_memory panics on dense DOM structures.\n2. Interaction: Implements a navigation bridge and auto-scroll for\n   browser_click, ensuring links are traversed and off-screen\n   elements are visible before event dispatch.\n3. Scrolling: Implements manual viewport mutation for keyboard\n   navigation keys (PageDown, Space, etc.) to ensure scroll sync.\n4. Culling: Relaxes Selective mode culling with a 2000px vertical\n   buffer and refined relevance heuristics to prevent empty graphs.\n\nAlso updates security_audit_test.rs to request 512MB for OOM\nverification, ensuring the memory limit is still enforced under\nthe new 256MB default.",
          "timestamp": "2026-05-15T07:00:57Z",
          "url": "https://github.com/polymit/phantom-engine/commit/a9bcd51ec053d6aa74bc591d81072afd24cbb319"
        },
        "date": 1779092008142,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 729,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 730,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 602,
            "range": "± 5",
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
            "value": 6252591,
            "range": "± 227874",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 4077029,
            "range": "± 134148",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5707,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3338,
            "range": "± 54",
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
            "value": 205317,
            "range": "± 5092",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "committer": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "id": "a9bcd51ec053d6aa74bc591d81072afd24cbb319",
          "message": "fix(engine): harden navigation and memory; update security tests\n\nThis commit addresses four critical reliability bugs:\n\n1. Memory: Implements dynamic QuickJS heap scaling (up to 256MB) to\n   resolve js_out_of_memory panics on dense DOM structures.\n2. Interaction: Implements a navigation bridge and auto-scroll for\n   browser_click, ensuring links are traversed and off-screen\n   elements are visible before event dispatch.\n3. Scrolling: Implements manual viewport mutation for keyboard\n   navigation keys (PageDown, Space, etc.) to ensure scroll sync.\n4. Culling: Relaxes Selective mode culling with a 2000px vertical\n   buffer and refined relevance heuristics to prevent empty graphs.\n\nAlso updates security_audit_test.rs to request 512MB for OOM\nverification, ensuring the memory limit is still enforced under\nthe new 256MB default.",
          "timestamp": "2026-05-15T07:00:57Z",
          "url": "https://github.com/polymit/phantom-engine/commit/a9bcd51ec053d6aa74bc591d81072afd24cbb319"
        },
        "date": 1779697708797,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 704,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 712,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 603,
            "range": "± 6",
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
            "value": 6249341,
            "range": "± 73038",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 4107723,
            "range": "± 66234",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5513,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3284,
            "range": "± 72",
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
            "value": 202366,
            "range": "± 4741",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "committer": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "id": "a9bcd51ec053d6aa74bc591d81072afd24cbb319",
          "message": "fix(engine): harden navigation and memory; update security tests\n\nThis commit addresses four critical reliability bugs:\n\n1. Memory: Implements dynamic QuickJS heap scaling (up to 256MB) to\n   resolve js_out_of_memory panics on dense DOM structures.\n2. Interaction: Implements a navigation bridge and auto-scroll for\n   browser_click, ensuring links are traversed and off-screen\n   elements are visible before event dispatch.\n3. Scrolling: Implements manual viewport mutation for keyboard\n   navigation keys (PageDown, Space, etc.) to ensure scroll sync.\n4. Culling: Relaxes Selective mode culling with a 2000px vertical\n   buffer and refined relevance heuristics to prevent empty graphs.\n\nAlso updates security_audit_test.rs to request 512MB for OOM\nverification, ensuring the memory limit is still enforced under\nthe new 256MB default.",
          "timestamp": "2026-05-15T07:00:57Z",
          "url": "https://github.com/polymit/phantom-engine/commit/a9bcd51ec053d6aa74bc591d81072afd24cbb319"
        },
        "date": 1780306635398,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 583,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 595,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 491,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "session_suspend_resume",
            "value": 93,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cct_full_1000_nodes",
            "value": 6197290,
            "range": "± 58339",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 4100027,
            "range": "± 47970",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5382,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3279,
            "range": "± 47",
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
            "value": 207961,
            "range": "± 1185",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "committer": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "id": "a9bcd51ec053d6aa74bc591d81072afd24cbb319",
          "message": "fix(engine): harden navigation and memory; update security tests\n\nThis commit addresses four critical reliability bugs:\n\n1. Memory: Implements dynamic QuickJS heap scaling (up to 256MB) to\n   resolve js_out_of_memory panics on dense DOM structures.\n2. Interaction: Implements a navigation bridge and auto-scroll for\n   browser_click, ensuring links are traversed and off-screen\n   elements are visible before event dispatch.\n3. Scrolling: Implements manual viewport mutation for keyboard\n   navigation keys (PageDown, Space, etc.) to ensure scroll sync.\n4. Culling: Relaxes Selective mode culling with a 2000px vertical\n   buffer and refined relevance heuristics to prevent empty graphs.\n\nAlso updates security_audit_test.rs to request 512MB for OOM\nverification, ensuring the memory limit is still enforced under\nthe new 256MB default.",
          "timestamp": "2026-05-15T07:00:57Z",
          "url": "https://github.com/polymit/phantom-engine/commit/a9bcd51ec053d6aa74bc591d81072afd24cbb319"
        },
        "date": 1780909457600,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 707,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 712,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 606,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_suspend_resume",
            "value": 102,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cct_full_1000_nodes",
            "value": 6245809,
            "range": "± 44986",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 4103472,
            "range": "± 14649",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5441,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3345,
            "range": "± 66",
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
            "value": 206134,
            "range": "± 1016",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "committer": {
            "name": "polymit",
            "username": "polymit-hq",
            "email": "polymit.main@gmail.com"
          },
          "id": "a9bcd51ec053d6aa74bc591d81072afd24cbb319",
          "message": "fix(engine): harden navigation and memory; update security tests\n\nThis commit addresses four critical reliability bugs:\n\n1. Memory: Implements dynamic QuickJS heap scaling (up to 256MB) to\n   resolve js_out_of_memory panics on dense DOM structures.\n2. Interaction: Implements a navigation bridge and auto-scroll for\n   browser_click, ensuring links are traversed and off-screen\n   elements are visible before event dispatch.\n3. Scrolling: Implements manual viewport mutation for keyboard\n   navigation keys (PageDown, Space, etc.) to ensure scroll sync.\n4. Culling: Relaxes Selective mode culling with a 2000px vertical\n   buffer and refined relevance heuristics to prevent empty graphs.\n\nAlso updates security_audit_test.rs to request 512MB for OOM\nverification, ensuring the memory limit is still enforced under\nthe new 256MB default.",
          "timestamp": "2026-05-15T07:00:57Z",
          "url": "https://github.com/polymit/phantom-engine/commit/a9bcd51ec053d6aa74bc591d81072afd24cbb319"
        },
        "date": 1781519639487,
        "tool": "cargo",
        "benches": [
          {
            "name": "session_create_quickjs",
            "value": 709,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_create_v8",
            "value": 712,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "session_clone_cow",
            "value": 607,
            "range": "± 1",
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
            "value": 6288429,
            "range": "± 24871",
            "unit": "ns/iter"
          },
          {
            "name": "cct_selective_1000_nodes",
            "value": 4114424,
            "range": "± 12367",
            "unit": "ns/iter"
          },
          {
            "name": "cct_delta_10_mutations",
            "value": 5374,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "quickjs_eval_simple",
            "value": 3316,
            "range": "± 70",
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
            "value": 204969,
            "range": "± 1550",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}