module.exports = {
	// 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
	root: true,
	env: {
		browser: true,
		node: true,
		mocha: true,
		es6: true,
	},
	// es6 추가 설정
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	// 추가적인 규칙들을 적용
	extends: ["eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"],
	// 코드 정리 플러그인 추가
	plugins: ['prettier', 'vue'],
	// 사용자 편의 규칙 추가
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 130,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
				semi: false,
				singleAttributePerLine: true,
				spaceBeforeFunctionParen: 'never',
			},
		],
		//'prettier/prettier'              : 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// Multi-Word 컴포넌트 생성 안하면 오류로 잡는 부분 처리
		'vue/multi-word-component-names': 0,
	},
}
