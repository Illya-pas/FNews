import {WRITE_INFO} from "./types";

export function checkFakeArticle (value) {
	return async (dispatch) => {
		let filterTarget = `
			mutation{
				addText(text: "${value.replace(/\s+/g, ' ')}"){
					addText{
						id,
						text,
						texttag
					}
				}
			}`

		const res = await fetch(`http://192.168.1.9:8000/graphql`,{
			method: 'POST',
			headers: {
    		'Content-Type': 'application/json',
    		'Accept': 'application/json',
			},
			body: JSON.stringify({
				query: filterTarget
			})
		});
		const json = await res.json()
		let articleTag = json.data.addText.addText.texttag
		dispatch({ type: WRITE_INFO, payload: articleTag })
		console.log(articleTag)
	}
}