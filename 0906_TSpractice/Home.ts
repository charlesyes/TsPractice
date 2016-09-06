/// <reference path="scripts/typings/jquery/jquery.d.ts" />
declare var Mustache: any;
module TSPractice {
    export interface iTSPracticeMember {
        Name: string;
        Value: number;
        ChxID: string;
        inputID: string;
        spanID: string;
    }
    //#region Template
    export class Template {
        public static TemplateOne: string;
        public static TemplateInput: string;
        public static Create(): void {
            Template.TemplateOne = $("#TemplateHtml").html();
            Template.TemplateInput = $("#TemplateInput").html();
        }
    }
    //#endregion
    //#region Data
    export class DataContent {
        private Data: iTSPracticeMember[] = [];
        public AddData(p: iTSPracticeMember): void {
            this.Data.push(p);
        }
        public GetData(): iTSPracticeMember[] {
            return this.Data;
        }
    }
    export class Data {
        public static DataContent: DataContent = new DataContent();   
    }
    //#endregion
    //#region Form
    export class FormCreate {
        private m_Target: any;
        GetForm(): any { return this.m_Target; }
        Create(): void {
            this.m_Target = $("#Formdiv");
            var tmpDataCollect: iTSPracticeMember[] = TSPractice.Data.DataContent.GetData();
            var tmpDataLength: number = tmpDataCollect.length;
            var tmpIdx;
            var tmpResult = "";
            for (tmpIdx = 0; tmpDataLength--; tmpIdx++) {
                var tmpData: iTSPracticeMember = tmpDataCollect[tmpIdx];
                tmpResult += Mustache.render(Template.TemplateOne, tmpData);
                tmpData = null;
            }
            var renderInput = Mustache.render(Template.TemplateInput, { inputID:'inputID1'})
            var Result = tmpResult + renderInput;
            this.GetForm().append(Result);
       
            console.info(Template.TemplateOne, TSPractice.Data.DataContent.GetData());
        }
        Update(): void {
        }
    }//#endregion
}// End module TSPractice

var MainData: TSPractice.FormCreate = new TSPractice.FormCreate();
$(function (): void {
    TSPractice.Template.Create();
    var forNineNine: number = 99;
    var forData: number;
    for (forData = 0; forData <= forNineNine; forData++) { 
        TSPractice.Data.DataContent.AddData
            ({ Name: "Test" + forData, Value: forData, ChxID: "ChxID" + forData, inputID: "inputID" + forData , spanID:"spanID" + forData});
    }
    MainData.Create();
})
