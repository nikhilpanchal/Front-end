export const ACTION_SWITCH_TITLE = "Switch_Title";


export function switchTitle(text) {
	return {
		type: ACTION_SWITCH_TITLE,
		text
	}
}