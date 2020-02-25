import * as actions from "../../actions/apiActions";
import { API_START } from "../../constants/actionTypes";

describe("apiStart", () =>{
    test("has type API_START and payload API_START", () => {
        const expected = {
            type: "API_START", 
            payload: "API_START"
        };
        expect(actions.apiStart(API_START)).toEqual(expected);
    });
    
    test("has type API_START and payload 22", () => {
        const expected = {
            type: API_START,
            payload: 22
        };
        expect(actions.apiStart(22)).toEqual(expected);
    });
});