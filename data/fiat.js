export default {
	data: data
}

function data() {
    return [
    	{
			"name": "US Dollar",
			"ticker": "USD",
			"symbol": "$",
			"icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
		},
        {
            "name": "Euro",
            "ticker": "EUR",
            "symbol": "€",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABkElEQVRIS7XVvUtXcRTH8ZdDIVFED4IgEREaQVj4F9iei4MQQQ9DKIg02BLtYlNLQ4ODokOYo4OCg1NjUBQURVFEZEEJ4SAUyoGvcP1xr/dBPOP9nfN5n/M9D782B2xtDfU7cQHHsIGP+IatVr06gEO4jVFczknsOp41BXRjHlf2qLgHH5oALmEVpzLB//EGf3A6fe9t8kTxxq9wLonEGz/GJH5V6V9ZDybwICN0E7NVhHd8igDtOIJPOJ6cF3AnRzyqiknKtSLAuzSGVZM9gfU85yJAzPX5iuox/2fqVtCPcVxLgV9wv0DkO17UBfThIQZTYPRiuEDkJX7XBdR5oiE8rwt4j9jMKnYWX+sCTqIDr3E4BS/hbovQP/zYK4uyRZvDjYzAABarlFW2aDu/x6jGzYnFC9vEPUwh7lGplVUQArcw3aL0GctYS0cwruwI3rYSqwAiJk7E00w/8jIfw5OmgIi7iEdp+fISm0l/SLsYVSvIBnXhahrjo/iLGOsV/NxPBaUNzXNoUkEt0IEDtgEsPD4Zad9aAQAAAABJRU5ErkJggg=="
        },
        {
            "name": "Renminbi - Chinese Yuan",
            "ticker": "CNY",
            "symbol": "¥",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfklEQVRYR82XXaraQBTHz4QIPly0PokiNGIgYoj4sQDtDtoV9HYH3UFvV9At3K6g7uDaBWiEqCRgaC4ExSc/8MEHyZQRlXHuJI5e621e55zk9//POWcmCN74QW/8fQgFqNVqvwDgIw2IMVZM03yOgq7X60mMsQcA76i4Vrfb/cTLCwWoVqsNjHGbSXrs9XpfogAqlco3AHigYxBCTdM0f58FQIINw3giyVTiPBaLKZ1OZxEGUS6XZ7R6IsKyrA9h8ZE1YBhGAwCOXMAYP/T7/e+8F+q6/lmSpEdmrWlZFlc9iTtZhLquPwHAwQWyv8PhMM8DKJVKfxBCCrXWHgwGoeqFAIrFYgMhxLpwb9v2TxoiJK5p23aoeiEAEqRp2pELANBzHKdKA2iaxnZN23GcSPXCAKqq8lxojkajrbp8Pv9elmXSeocHY3xYj+qakzWwTy4UCqwLLdd1t72tquoPjPFXeu9d1z2pXtgBEqgoSkOSJLYWFITQnBQmQugweIIgaHqeF7n3e1hhB3YQRy4EQUBazpMkiR48bc/zhNSf5QAJzuVyrAvznZIj9b7vC6k/G2AHwdYCXWNt3/eF1Z8EyGazZK6zT4U9pKiAFmlRNmE8HnMn50mATCaDo1pIdG0ymYTWWmQRptPpqwBMp9PLAEQVviburDZ8zYfCciMBUqnUVbZgNptdtgXJZPIqAIvF4jKARCLBa8PtUASAe8bW7VTkWb1cLi9rw7B9u7u7e3FTIpeW1WolPAEvOgv2SfF4/MXBRA6g9Xp9OwD2rkgcuBmALMtcBzabzW0cIAA8B24KwP60kP+HmwEAAO+OSFoz8reN11X/9yj+F7OffedfjKTsIfP/unYAAAAASUVORK5CYII="
        },
        {
            "name": "Pound Sterling",
            "ticker": "GBP",
            "symbol": "£",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB9UlEQVRIS63WS6hPURQG8N+lvBMmHhMpBogMzcSI5DmQUDKQmBhjwIAoKYo8igERhZCZlMiAJEVmXimiMEB5Rkv7at/d/p9z/3XPcK21v2+99rdPj+ZvJNZgKeZgPAbhIx7jGk7hcyeYngb85TiWQJvSeIe1uFkL6kSwASfRlECO9x3zcK8kqQFMS+UPrWT0CQE2oeJ7gtn4k/tqBNGWTQXAe6zDjWSfijOYW8TNx602gueYUhxcgSuFLaqI2OGZfS+2txFEC4ZkQVHyMPyotOU6Fmf2SCKS+f/VWvQB4wqCIPxVIdiDrZn9Dha1EcS6LSjAYkNut9yZqrtWQWR0sIiOwW8eKIIxeIXRGWCs58S0ol3xlBUcwLIENqJAel0Mej+Ot7GVBDuwu+1Q8p9Nd6MxvCQIUbvaT4K4ubPaYkuC6P/CdGgUThR6dBh3k/8nLnVLUMa/xOTMuAVH20Db7kHuf1sI22pcGCiC6XiagX1J1cRj0++vSe8vF7qyHqcbkCfhTenvRLATu1JwaFDI9FfEGxFzeYD7eJae0CU4kmS+j+qWBCG9h7Cx3z3oG/gCM/Ct11wSzMTDQq675dqGfZ0Iwp7f5hhsDLr3mYyXrGlukdyq1Lp/HLXgwel35CLOFQIXgrcyaX5s2VhEEo9wPq3w77zkv6XOXBn/81wBAAAAAElFTkSuQmCC"
        },
        {
            "name": "Singapore Dollar",
            "ticker": "SGD",
            "symbol": "$",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
        },
        {
            "name": "Russian Ruble",
            "ticker": "RUB",
            "symbol": "₽",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABZklEQVRIS73VsUtXURQH8I9irYpLTm2Ck0smQlJbglPQrH+ATRpE0hAkNAkugrNTY3uDi0hDLi6KIBI4NUSKiximXLg/uVx/7/V8XD1w4XHfOd/vPed7zr097th6avAf4CXqfI6xg9MqnLrgEew1SPAvvuAdfuX+JQg6mEd4jp8pSVOCc6xlp+vDU4wn+9/xDJedvaYEJxioKNcbrCb/JrFVkiAc8geeRNAP+FySIGCtYzaCrmChNMEmQmmCfcSnkgSv8DXRYArfqggmEFawR3gfv8+wmIn8MHbR62QYdzGKiyqC0A2hK9pY6LQXcbKv4/M2bUuwgTns5yfLCcYQVrChKFj4DiWaz4LDMP3BNg6rUi4xaLXlzAmW8baFAI8R7qIbVkqDYRw0IZiOb0DwHcRMDOp22XXw/kWtur4J965BmmX64NTdprcSOXXuj6n34jeWWohf+962wftvFxUBTUHqRC5CdgXlrEUZu/fglQAAAABJRU5ErkJggg=="
        },
        {
            "name": "Japanese Yen",
            "ticker": "JPY",
            "symbol": "¥",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfklEQVRYR82XXaraQBTHz4QIPly0PokiNGIgYoj4sQDtDtoV9HYH3UFvV9At3K6g7uDaBWiEqCRgaC4ExSc/8MEHyZQRlXHuJI5e621e55zk9//POWcmCN74QW/8fQgFqNVqvwDgIw2IMVZM03yOgq7X60mMsQcA76i4Vrfb/cTLCwWoVqsNjHGbSXrs9XpfogAqlco3AHigYxBCTdM0f58FQIINw3giyVTiPBaLKZ1OZxEGUS6XZ7R6IsKyrA9h8ZE1YBhGAwCOXMAYP/T7/e+8F+q6/lmSpEdmrWlZFlc9iTtZhLquPwHAwQWyv8PhMM8DKJVKfxBCCrXWHgwGoeqFAIrFYgMhxLpwb9v2TxoiJK5p23aoeiEAEqRp2pELANBzHKdKA2iaxnZN23GcSPXCAKqq8lxojkajrbp8Pv9elmXSeocHY3xYj+qakzWwTy4UCqwLLdd1t72tquoPjPFXeu9d1z2pXtgBEqgoSkOSJLYWFITQnBQmQugweIIgaHqeF7n3e1hhB3YQRy4EQUBazpMkiR48bc/zhNSf5QAJzuVyrAvznZIj9b7vC6k/G2AHwdYCXWNt3/eF1Z8EyGazZK6zT4U9pKiAFmlRNmE8HnMn50mATCaDo1pIdG0ymYTWWmQRptPpqwBMp9PLAEQVviburDZ8zYfCciMBUqnUVbZgNptdtgXJZPIqAIvF4jKARCLBa8PtUASAe8bW7VTkWb1cLi9rw7B9u7u7e3FTIpeW1WolPAEvOgv2SfF4/MXBRA6g9Xp9OwD2rkgcuBmALMtcBzabzW0cIAA8B24KwP60kP+HmwEAAO+OSFoz8reN11X/9yj+F7OffedfjKTsIfP/unYAAAAASUVORK5CYII="
        },
        {
            "name": "Gold",
            "ticker": "GOLD",
            "symbol": "Au",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAmUlEQVRIS+2UUQqAMAxD3y4kKnj/C4jiiZR+TNy0W4eKIu63adMk2xw3H3fzfH6CrMOPWjQCdXZFEFyr4VIKZsNwD1HnWAhOYU41A17lexRMQBV5b1HpW3aBx80lwZoujkagbS0LpGpCGtS/QVASrMWiIHCx6Ipg1cC3BEfhpTaWoVp9fYA/QZFFBb+zGeokgwFozC12YA90C5FFLhmViCcwAAAAAElFTkSuQmCC"
        },
        {
            "name": "South Korean Won",
            "ticker": "KRW",
            "symbol": "₩",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACbklEQVRIS9XVS8hVZRQG4OcPpXIgaeIkCBRLHEVIIRpFaKKDP0hCRAhxYqZETiIwQxskEqEYaIMQJHKiQgoNRMULQepMITEoIVFwYJiJKFlqvLF27LM5GxFs0Jqc9a3L957vXZc94j+WETyBlwrnJH7twZyI2eU7hD964ibjxfJ9F4BXcKwMH2JjT+L7+LR8i/BNT9x6bCjfnAA8ht/qN/9sfk/iQbxWvi+wqifuOF7GDUwMQOQw5uImJuB2J7n9J+I6j2lDAMbhGsbiW4w2AGvxSfMsfN9Jnoe8ri0BCFBb2nFrsDUAU6p4X1fkZ9jRSXwPKzu2j7C3Y3u3RV3qdDoA93q4fBjmewHYVAVOcWfUrdvxZ+lpz7dKP1I1er7O2/BX6eOxvPQz1Zk3mxrEHs62VED6/UTpS7Gr9BcwHQ2ds3CqfK9jf+kB2hk9ADE+ikmYWQFncan0Z6tOOabb0inNwLXjpuKZysnA/o5bAbhVFD0Mzrt3DFAU5x68iet4suj4obJW4MvSM9GZ7PCfGoWBK+UbGMJ2DeJ/BylwJPskO2pzndPOv5Seic5kR0bxOHbXeWCNdAFSwB8r8AO8igX4ucVv3LnwalH7eb3gbdytl2ea/5EuQM4X8RSOIl2Sy/Kq1R2Cm910DmPqD6SjkvOvdAHi+KrV903gG9jXAWhv18aVdbPufgDLmh6uwDv17LRdW57LKujYQmmz+odSFOPTuNBKzOKb07kox0dwGfnARLKJ01EDH6JhFCX4p9Y6/rj1AeniZMIz6ZEDWNgN6ANY0ipW9k0Ah0kmenE5sv8z6QPSB9Bz34Ob//8AfwP1hHCwbE+R3QAAAABJRU5ErkJggg=="
        },
        {
            "name": "Australian Dollar",
            "ticker": "AUD",
            "symbol": "$",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
        },
        {
            "name": "Canadian Dollar",
            "ticker": "CAD",
            "symbol": "$",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
        },
        {
            "name": "Indian Rupee",
            "ticker": "INR",
            "symbol": "₹",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgklEQVRIS9XVPUhVYRzH8c+1UBGCIHBQCKLBoSVoyCkXF19ArFloaAnHoNkxsLGhSQShKRcHBREERzc3kSaXtrIg7F35w3PhqPec85wrDv63+7z8vs/v/3JuyxVHq0Q/1sfRl8n/ge1OZ8sAN/EnUzyO/UPcuRCXAfzCz6T4HXebAAI8g3704A7G8BTtR+1iFCdVTsscxJ14Ue+5y8/wprA2hQP8xmETB01rEC7CaaMaxKuqHBbFGhc5Lt/u0BmD2CusR4qiFn9x1MRBp7MjWE6Fjf3I+f0kXlrnshREPldSF0Wh7+FBQeU/prFRNyvdzMFnvMB6nXjslwFu4CtuFUSWsIk1HOeIVwFi70kSbH+PPmAOkZ7sqGvDWawWnC7idbZ6Zp/P411B9CXe50LqHLR13uJV+hFDNZnSV8vJBUTbfkSkLOJbmof9OkIuIHQGsINHSfQTHuNLFaQJIHSG06dhKIluYaJqmpsCQvchnidAtOwC4g+nY3QDqEv7mf3rDzgFQtk6GWl/9EgAAAAASUVORK5CYII="
        },
        {
            "name": "United Arab Emirates Dirham",
            "ticker": "AED",
            "symbol": "د.إ",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwSFC4G12e3JwAAAwxJREFUSMellU9oVFcUxn/n3peQ0YRihdRFoVDpohhQWxdCZtpJ+xL/0bpw60JciYgpLW5a7KZ05apL1y2UFkqxCrXNmzIwM65cFEqxVsWNxD+EGnVmMs577x4X82b68iaTROZu7r2ce79z7/nO+Y74ftECjHhGnzXCSWDciNwbHTUh/w8FhM2N9Fk1yUJ+vfqHU+V7VW7FqlPWiCQHBbCptQBmnb1N73sOkrkJIEqMoCmbpl640V5T+54DHfDdlwXvu2sGmVSHByeJ1SpSAFQ7PoYFB/Ay2SFChpUhwAHxshxk8nHDMAVBuZfOH3/0oWmuxOnEcd4QHCAibjpfOCRwTKH+33L7wsTWkQdh5MwgDuhxIJsJi8qeqdxVhW3AvCrf1ZvRK+mzJntZ+kt2YMxVkdt3Q1OrVo4BPwNF5/STIChH2TpYVSWAqm6O0DhWmZubsSJ8CiwB56fzhddyY9atVQddWHmZbHFOjbVyH7iUGM9evlJy3RClk1K6bjIcbFjd7+ze3ha4mRj3D5QK6f+SBEE5CoJyJNInKz1nN24uG4XXE+Ny97o3QGu7HHDu1M6w1Yo/B/attOLTuTG75Fmj9UY0CTxHiEQZXWnpYeBMAvNDupLTw3aSDyMgE1s999U3/04KfK2drPltYaF8EWA6X7gEGJQl4E3grQTjp1q18qPvF71V/SCZ/wb+MvDMqWq9GZlapfJI4c9ER67Nzc10H/UUeFfgQAL+BJi3Rk7OznaaGCDi+0UrgrRD58WR7lN4H7i+d9e23/+589RThVKpIweHD31g26ETVaRUKof59wqv4nhD4GGlWlkESF7ekwrx/aINgnKczxc+A75Q+BbYXqtWjqcOIx35WJVNuTEbX75SckeP+qbRiGy60XQbT08zFI4oXKxVK/PjW7wTBw/M2DRYFhzQlVZsfL/oNRqRWQO8T65/AS5M5wvNejPaYYQvJ8ZHHrdDZ4eR63Qlvw0sAjOAEeR57NSsA56VrTULUHy/aHJjlsdP2jsEIkSaW3K26Zwa1XXBN9XxXgC+mVtBxnDJRgAAAABJRU5ErkJggg=="
        },
        {
            "name": "Swedish Krona",
            "ticker": "SEK",
            "symbol": "kr",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEjSURBVEhL7ZKxSgNBFEVXEEEbqyCkFvwAK8UPiEXAH7C0sw4WIZWQwh+QNH5BIE2aCGm0tJGAoLYSS00Z1Oi5s/twN45k0LGRHDjkvbcP7mx2Eg9H+J6Wf8M8YCb/M2AVb/ERyxpkaK+ZlskS7mMXH/AYvUwHLGAHx7ijQQ4L2MRB1t9hCyvoZTqggeoPXVdE83N8Rp26ijPJB+ziG5657ivak/e4pkEIFrCOT3iFy+hDezqA/qJgLOA6+z3F79DzXlqGYwGv2McX3EAf2jtJy3AsoIYlHGEbfWjPrmkwFqDrKeo4wS3XFflVgLGCQ7xwXZEoAeIANdtz3SfRAhbxJlO1ES1A6PSa622MqAHiEvU99F1E9IBt1DPdLPGjgDk5kuQDNnBdXED5oi8AAAAASUVORK5CYII="
        },
        {
            "name": "Polish Złoty",
            "ticker": "PLN",
            "symbol": "zł",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwSFBUXgWV47QAAA6tJREFUSMellU1oXFUUx3/nvPdmJjFVocWo1Y2ldKEgLuvM0Km8KAU11o0gCkKkILpwJXQhSIWsdFkXhWIXoi78gEI3TYJpXorahS5ELJWCJK0Q22LIB0lm5t3j4t0382Yy0y48cHnv3HvOuf97zj3/K3HcCNgtBshd9I602iYudY8ahMBGKdI7qh1TU/8jgPqvAMEAXQpDAVEV0tQ9YMZVM66b8ZlLrVz0LW5gfYhtyFpHNwPNPmt+bavfVwsBB8nQ4N6tRxfA9dkqw+UewRERMQciXZR5wI6tDingPYPnev8C0jsVFoNXyoFzzkRVXKcQXs9RpM4kTc2cMzHros/Dm2FBIJamJoCE+elmZ+fb1Vr9lWIaZXClTYTfRivhDfO1povSLl1a2KrW6oeiUJbCUJthX2q+BXYGHr0rbTPer1T03PaOk9TXILet1uqfCrzohKdFshSZrwXAKrDjHTrgBcRg3O/7L/BHq21C1iCWdjd/0/teCyXLRN4QFk80wkhlf6RyQEM5EGk2xkr6OPBuIW3TlxeTH5tNJxcv/pCmxhHgPr/mDL4B3nhkfLRl1q0BGERlbRdzUa4Ebm21ucfgCw/kwuJi8snERCOcmZlvV2v108AJIPTIv1OVt+8fC9dXbm2HgNO+G0A+AKk/tc+lxgVgROAfEabiuBGadW7eq8CqQNvncysQmjtNFxT7YNg9d+eTv98BDpMd/cPRkfB2n+0ZgQmD2wPIcihVCGBb2+lDAh97EMnlxeSMOcsbkzhuhOVIp1X4K7+lAnIvqhAR3OzsfNuMzw32ApuB8NKxY88F1gckjLRtPgvSSxUd0X7kMzPzaa1WPwm84CdfW0iS9VbLyUBGHd4zu2swUglctVY/bPCBnz8bRToXx43wLnRdDL6L03pqsLrWGgM+Ah4EbopwqlTS1v+h6zBHMjc3367W6lPA897gxGKSLOXWX56b4vW3zgIwORnr5mY7EBHnClRh2b3vyZrEcUO/Pv2sm5xKngF+8fG+B04JRNble98eqAor5XJwQwR2ttNKavwJPAyc3z8+cvzOalO9k6mA7Ds0DVmL50k8DvxqcEXgZ8vGFTL9J2ec9HTNQpJsAMse2Ms3V7Y2Hht3qapYRtcCR48eKTdb7ipwy3ofE7FCjbwuAtekt6jvAV8BTwAj15fsyYMHR39fXt5UieOGYshOy+3BTDrPm4hgZt3nTjAyjlCRZlTS7bw+pZLa+nprr8EYYIHKSrkcNJ0z/gMmfKIJ2nFwZAAAAABJRU5ErkJggg=="
        },
        {
            "name": "South African Rand",
            "ticker": "ZAR",
            "symbol": "R",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAC/VBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmnzsbAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAES0AABEtAa0wBJ4AAAAHdElNRQfhDBIUGByjGd8oAAAAQ0lEQVQoz2NgAIJ/cMCACv4hgde4JFB0wbg4JaBS2CQY6CCBy3JszsXpQazBhUsc1Q4qSTDgDV2cEoupGLr/sEnA2QDW8+DN/ulgowAAAABJRU5ErkJggg=="
        },
        {
            "name": "Norwegian Krone",
            "ticker": "NOK",
            "symbol": "kr",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEjSURBVEhL7ZKxSgNBFEVXEEEbqyCkFvwAK8UPiEXAH7C0sw4WIZWQwh+QNH5BIE2aCGm0tJGAoLYSS00Z1Oi5s/twN45k0LGRHDjkvbcP7mx2Eg9H+J6Wf8M8YCb/M2AVb/ERyxpkaK+ZlskS7mMXH/AYvUwHLGAHx7ijQQ4L2MRB1t9hCyvoZTqggeoPXVdE83N8Rp26ijPJB+ziG5657ivak/e4pkEIFrCOT3iFy+hDezqA/qJgLOA6+z3F79DzXlqGYwGv2McX3EAf2jtJy3AsoIYlHGEbfWjPrmkwFqDrKeo4wS3XFflVgLGCQ7xwXZEoAeIANdtz3SfRAhbxJlO1ES1A6PSa622MqAHiEvU99F1E9IBt1DPdLPGjgDk5kuQDNnBdXED5oi8AAAAASUVORK5CYII="
        },
        {
            "name": "Danish Krone",
            "ticker": "DKK",
            "symbol": "kr",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEjSURBVEhL7ZKxSgNBFEVXEEEbqyCkFvwAK8UPiEXAH7C0sw4WIZWQwh+QNH5BIE2aCGm0tJGAoLYSS00Z1Oi5s/twN45k0LGRHDjkvbcP7mx2Eg9H+J6Wf8M8YCb/M2AVb/ERyxpkaK+ZlskS7mMXH/AYvUwHLGAHx7ijQQ4L2MRB1t9hCyvoZTqggeoPXVdE83N8Rp26ijPJB+ziG5657ivak/e4pkEIFrCOT3iFy+hDezqA/qJgLOA6+z3F79DzXlqGYwGv2McX3EAf2jtJy3AsoIYlHGEbfWjPrmkwFqDrKeo4wS3XFflVgLGCQ7xwXZEoAeIANdtz3SfRAhbxJlO1ES1A6PSa622MqAHiEvU99F1E9IBt1DPdLPGjgDk5kuQDNnBdXED5oi8AAAAASUVORK5CYII="
        },
        {
            "name": "Mexican Peso",
            "ticker": "MXN",
            "symbol": "$",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
        },
        {
            "name": "Romanian Leu",
            "ticker": "RON",
            "symbol": "lei",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwSFCocTmmLWQAABUNJREFUSMdtVF1sFFUYPd83s9Od6ba7pbQVhLZUazT1BySIgv0BKSA8GciWmFQTeVI0QAAFEjHxyVqjJpD4gJGkxES2YiBqIpIgtDURE4OaSAvYUmIL7bY1W1ra2d259/Ohs+2ydl5mbr57zzn3O2c+isVi3N3dzYWFhYjH43AcB3l5eXBdF5ZlIZFIoLy8HMPDwyAiBAIBeJ6HSCQiQ0NDXFRUJMlkEqZpQkSQSCRQUVGBkZERVFdXa7r40wVuWLdeA8D27duDRCQiAiICABARlFLCzEREEBEAgIgIM7PWWvwzREQgImitNTNzTU2Nos0vbimbnJz8AsC/XZ0dzdFoNAiAACgADMADEPDX8Gvwa2kAJgDxSam9vd3162hrazNMz/NCALYAcAE0A9BZQMoHzwDBByOf2PLfAID29vZkbV39fhFpBXDlq1OnNjDRDHsOcLZKlaVSZ5EYPnhmb6Z1u/zPFalUOswiswSStY9y1vN9S44gfuftAwYzNxHRjwCOlJaUDJkZ03IAJItkloyIiIlEi4h/jvxbEQDpu9lvVlYsvdLWdnLTn7/9Qt+du2AwM1MOAeWCO7aNWCyWcpMpHhkdK9y2qdGLxWIpw2Dx2zj7vHtwnwcAT658ViKRiNCGxo1Vruv2ArjX1dkRikajVoZIRBAJh+VGb19YKXVMRNb6fiQBnH6s+uFDSc/TrusSABzYsyu979B7W5VSbxHRr4sXLWphIpKc+JGvShYsKNLd167Xep4XF5FoVmpCAPZevX6je2DwdqlhGADAq9bUi1KqnIg2AljjKcUsIjSfkfn5jnT3XHsGwLd+kg5bgcDyNatWVgQCgdUAviSiZalU6v27E3dn/wVmJt8frbUilnlcBiB3hoZtrWUvABtAa2fHpQ/KykrHbg3eNsqXPHhr7XOrXwUwBGDb1JRblC0wMwVE5H6Dso1OJlNFADYDQFdnx6GdO18zTNPUlhUQEUHLh60KwEkAYaVUhWVZs6BzRCwm+XTZhWAwqJVS5QDyAVypq29Y9XfvzWC2yrr6Bi0iSkQgItWlJQsvZ9TPRVjIzJicIQJA4cICEZGl/vopEf3zfI0UkcAMIEw/dVRbVz87GQw2xJzHZB0M2rNjgYC/BHSECPfdwJ+mBgA2TbNraDjOROTV1tVnTGalPTbp/h8MADAwOGgy83WlFAQo6+q4dCY3C/03rtKyR2pkYuwO7d5/2Jy8d4//P0pYm3ru5CyCUgqGYQwrpQYALKmrb2gEcL6pqcnKFhONRmXn67tzh12WyUQ81/qZQ74XVBAKjQH4xg/05+tf2LDEcWyx7aA4tq2LixeoxPi4kxgft5lpvqhDKSUmEWVGsPN8bd1LifHxi5FweKqgIKTvTkx8nE6n1wF4Ip1On+/t6z8B4KqflIdEZCuAHitgHXQcW2UEZm7BzGDLCkwQ4feZIk5MTU0/bdu2SqVSXFVZMejY9kYRaQfwqIi0iMjXWuvTIvIpERoJdNNPYkZoIJN2QJiG7tzm6I6Xq0Vkj4gETdP8ZPEDZdc8pQQAi4hqqF2rT50+U6O13gGgCsAkEV227fyT53743m1qasoDgHzH0X39/YtF8LiIxFesWP4HtbS0mAMD/+Do0WMeALy56w0zPjJqZDxjZlJKSVVlhWpp/Uhl9/iV5mZr2nWJeSZAWmuEw4X6+PHPvAP7DxrFC0tAZ8+e5Z6eHi4oKMDo6CiCwaCYpknpdBqGYcB1XUQiEZmamiKtNZhZlFJUXFyMeDyOUCiEZDIJZoZlWZienibHcfT09DRVVlbq/wDdHqJaJhka7gAAAABJRU5ErkJggg=="
        },
        {
            "name": "Hong Kong Dollar",
            "ticker": "HKD",
            "symbol": "$",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
        },
        {
            "name": "Brazilian Real",
            "ticker": "BRL",
            "symbol": "R$",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAC6FBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCkb7hAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAI28AACNvATX8B/sAAAAHdElNRQfhDBIUHhT7mPCcAAAAXElEQVQoz2NgoB34jkN8CrJEXfeUiVglvkMAnIkkARECEUAdCBmYYpDN+CQYXmCRQLYBw/IvaBIw535HswPKxbQcYgXYcpKc+/0b0IqnmBLo7sUVukRJ4IwoCgAANlR3W7wpntwAAAAASUVORK5CYII="
        },
        {
            "name": "Philippine Piso",
            "ticker": "PHP",
            "symbol": "₱",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwSFBs1yoYUhwAAAURJREFUSMft1TsvRHEQBfAfFvEIEkJnFQqVQqJTikYlkSi04hP4JDqJSqFWSkhUClEQGhQS4hGPIF7rsQ/NSLaQXe4WIjHN/d87c+fMnDl3Lv/221ZVwleDdrQVxRaQxxsecRf3iawTi5G0gHdk8YpLLGEEtaWSpEr43vCMB8xiE/VowSDGMIxxLP8EoB79kagLLzjCbvjyWMU9ZjAdXT1iJ84lAZoxGZyn0RCVpovic3E+xVBQlsHhdwCyUXEdnqLiKxwX8Z2PbjLx7AK38W5ZilLojg6a4toaQ09F8lwMuBfrEddSZqZfzmIO15hCD/owgAlshExHk8q0A/Mh0RPs4QBnoa6tAG5MKtPPj+sVa9iP+BecYztUU6gEoAY3WMBKEhqqy/gL34xLDFCx/SpAdei7rdxCq3RdN8YqeP7/u/1N+wCt5EvD2+16KAAAAABJRU5ErkJggg=="
        },
        {
            "name": "Venezuelan Bolívar",
            "ticker": "VEF",
            "symbol": "Bs",
            "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAKCAYAAACuaZ5oAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwSFDUTE4yYVgAAAidJREFUKM+NkbtrVFEQxr85j7mv3HMvSkxWhA1YqSGNlQEb09lYq42pAoLKghAJlqbQ/0AsTBNBK0ESIyJ20UKChTYSsMkiS4rd7Gb37s3NPccm0ZgHZmAY5puB3zxIa22JqOecy51zmZRylZkfV6vVJWOMW15exnGMmRestVcBtADQrk4A+kmSPBBCvC7LMu73+9estdNBEFzsdDo/cEyTUi5KKWGMuVeWpf+nQESZMeb6nklOCiHWjDHjAFCr1UQQBJPM/F5r/coYc2VmZoYOAzDz/AHyDuDmbh7H8bjneT+DIDgzMTFBYRhOKqUaAwMDt6IomvZ9/22appUjAC8AQCkFrTWiKAIB2GbmTwDqAE455y75vn+30+k8S9NUdrvdp0SUbW1t3fnPiRaI6JwQYgGAIqJtZp5XRFQqpT4WRfGOiHwpZTXP86kwDItWqzUXhuHLoiiea61Pe543t7m5+eYIBhHRhpTyu3OOiagUQmyAiLIkSW7s7dRa32fmbwCQpikNDQ1VwjB8pJRqa60XBwcHT2RZdqwfiJ3o9umec44AYGxsjBqNxq9er/ewUqmMOOfG2+32aBAEh26xX1AAvKIoLjDzZQARgFFr7W1mno3jWKysrNQ8z1tj5s/r6+tnATS11v08zw+8Ycf/BRDRB2vteefciBCCAHSZeWp4eHip2WyCiFaJaKosy1khxIbW+kkURV/r9TqSJPl7CiG+CCG6+wG/AbEot/oLNgrtAAAAAElFTkSuQmCC"
        },
        {
            "name": "Czech Koruna",
            "ticker": "CZK",
            "symbol": "Kč",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAYAAACKsM07AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwSFCUg5p7rEQAAA2BJREFUOMuFVU1oXFUU/s65992fd9+8zAwzeZNMDDMD+WGcGIkzwSipIG6NuLAbwRBKN0VFioou3LgQQqGou+79QQkRKUR0pW6ytItCXQh1IVLwt7Y1NCZz3bwZn9M3zYULl3Pvd79zz/nOucB9RqlUyrVvbW0N15OTk+tBEPwZRdE7A5tz7v0gCG7U6/UlGGNestaec84leZc1Gg1VKBSes9a+UiwWn847Y619k4j8xMTEM4VC4Xki8s65s4N9T0R9Zn40C5qengYARFG0SUSemX25XH4ke6bX6w3XWusviOhvIvrHGPNB9pwnogNmXh0YFhYWBs9fYmZPRL5cLp/KC1GtVgMA1Ov1sjHmW2PMV61WK0xt+QQAkCRJUwhxG4APw/C17GXZMTMzMzaHc3Nz+QRJkkxLKa8A8EqpD9vtthoFt9vt4XpnZ0dGUfSk1npTa/1CHMePjw1Ro9GwWutPAfggCK5tbGwoABBC5HpZLBY3mPkHALcAHKfzLynlfpIkiwDgARwQ0ere3h7CMHwDgBdC3Ol2uxMAsLy8nHu5c+40EXkAfSHEj8aYd40xF6SU14noSGv9NgB4Zr5rjHnIOXcmBXit9f79aiRJkpYQ4oiIvDHmYg75ZrPZLCD19rZz7j0iOkgJjwH4OI7PAcDU1NQQ2Ol0Btr/LA3j551OxwDA7Ows5ufn73HGp7MPwFtrL1lrzxNRn4hudbvdMgDs7u7+B/AeROSJqK+13gSA9fX1sa8dEHil1F6qkAlmvgagr7W+NAqo1WqLqTh+tdaewgnDp0/9cmVlJcyo49k0XL/Fcdwbif/DKcGNMAxXTyQgoqMgCJ7IVh8AGGMupwn/KIoiOSiqer3eTHF/WGufOpGAmQ+11mujG81mM2HmYyLypVLpseweMx8Qkddav5ztXQCwtrZ2D8FdpdT/mt3i4iIAkDHmLQBeSnl9e3tbZGR4MbV/V6vVJvM8b7VadljJUsrcWFYqlQeY+fu0J13I9KCilPLnlOSbarU67LTVarWjlPpEKXV+UAcH1tqxybLWvgrgiIh+qVQqSwN7HMc9IcTvqVAOhRA3hRA3ARymkr8MZr6ilNp3zj04NkneIwiCr4UQV621r4/8Gw2t9cfM/JMQ4piZ7wghrkZR9CIA/Au4NcQwW9GnnAAAAABJRU5ErkJggg=="
        },
        {
            "name": "Swiss Franc",
            "ticker": "CHF",
            "symbol": "₣",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH4QwSFCgOj+aYkwAAANVJREFUSMft1DtqQkEUBuBPr4kQ7gbsAgGr9FqkjKR0EXap0lpIduECXEwaOwutRVIlGFS0EIM2I9wiihcnjfjDMMzjvM/5ueLiUTjhzy1ecffHW4Iexuc4kWKO7YHVOCZcOtHIOuxv+MjcFzGMYWCPEfp5BIo5DSR585s3ggoeMucfTM/ttBTfoaCLoHCKGTqxI5hhmUnXKsaslPAVIqiLXLQGWnjCDcp4xAaTGN53DwzXeywqqaIZcr9FG8+4j8lXKT7xi5f/ILsEtUB6gxh9f8WFYQcrlCvWWSNUVwAAAABJRU5ErkJggg=="
        },
        {
            "name": "Bitcoin",
            "ticker": "BTC",
            "symbol": "BTC ",
            "icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACYElEQVRIS53WP4hWRxQF8N8aVFALiyhoYcxigsQUVlYWKja2gQSTxVKMIiJR3FWwsFD8g2gjKgqBEBMNBoKIoIZUFkZshCiGoMTNaqGVqKCLSjjLPHk83vt214EPHnPvzLlz7pkzX5/eox9rsRJL8GFJf4I7+AM/49+ubfo6Ah/jIL7AlHGKeIvz2IEHzdw2gHU4gRnjbNwMv8AGnKkHmgCD2D/JjZvp23G4mqwDpPIfOjYPz/twA8kLhYd6FDKAnxKvALLgrx60HMNmPMdyLC7N7cJIXkQxXAH8gi8b2X/jYpm7ht+wFwGbhyGsqCmrCXYWXwcgUvynRS3nikR7tWQ6jmBjS1LU1R+AXaWyZs4oniKN/752kmn4s6x7hql4jNktIEMBuIrVPcqMIqKMjHA7s3xvwvHyHTo/bdnjSgAeFU67MNoAIohcwlD7Ce52XMiRAISKHHMiALGKVwg1lQoPYFsHwOhkAbbig2IJoTY9yvi2Rle90DGAh5g/wRPUezCCReVE6UtizTFG0fs2+SXm1BrfBnA5ADuLDTTRX+N3nMavJXihcH2/2MrNMr8Gl1pOMBiAhbjX0qTb+LwHdVVoGeIEHzVy31QXLfO5tV81EiLBLMy4XmxjN04VWW/B0vJrqyNmN1B5UdBTcXWJmgsma3aR8WcYa3I1YrE/dlCS+T24Vfwp/nW0B315ZsPKO7uucmMJvXx+Ai3xXTHAsdy2J/MbnMSsiexWywkt66vKq/muR38BYgFp/HiPftQSOvI+/Ncsqgugykvzw+eq0rS5JRB7jijytyUPy3DXaf8HrdiAbJNF4yoAAAAASUVORK5CYII="
        }
	]
};