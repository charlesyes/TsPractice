/// <reference path="scripts/typings/jquery/jquery.d.ts" />
var TSPractice;
(function (TSPractice) {
    //#region Template
    var Template = (function () {
        function Template() {
        }
        Template.Create = function () {
            Template.TemplateOne = $("#TemplateHtml").html();
            Template.TemplateInput = $("#TemplateInput").html();
        };
        return Template;
    }());
    TSPractice.Template = Template;
    //#endregion
    //#region Data
    var DataContent = (function () {
        function DataContent() {
            this.Data = [];
        }
        DataContent.prototype.AddData = function (p) {
            this.Data.push(p);
        };
        DataContent.prototype.GetData = function () {
            return this.Data;
        };
        return DataContent;
    }());
    TSPractice.DataContent = DataContent;
    var Data = (function () {
        function Data() {
        }
        Data.DataContent = new DataContent();
        return Data;
    }());
    TSPractice.Data = Data;
    //#endregion
    //#region Form
    var FormCreate = (function () {
        function FormCreate() {
        }
        FormCreate.prototype.GetForm = function () { return this.m_Target; };
        FormCreate.prototype.Create = function () {
            this.m_Target = $("#Formdiv");
            var tmpDataCollect = TSPractice.Data.DataContent.GetData();
            var tmpDataLength = tmpDataCollect.length;
            var tmpIdx;
            var tmpResult = "";
            for (tmpIdx = 0; tmpDataLength--; tmpIdx++) {
                var tmpData = tmpDataCollect[tmpIdx];
                tmpResult += Mustache.render(Template.TemplateOne, tmpData);
                tmpData = null;
            }
            var renderInput = Mustache.render(Template.TemplateInput, { inputID: 'inputID1' });
            var Result = tmpResult + renderInput;
            this.GetForm().append(Result);
            console.info(Template.TemplateOne, TSPractice.Data.DataContent.GetData());
        };
        FormCreate.prototype.Update = function () {
        };
        return FormCreate;
    }());
    TSPractice.FormCreate = FormCreate; //#endregion
})(TSPractice || (TSPractice = {})); // End module TSPractice
var MainData = new TSPractice.FormCreate();
$(function () {
    TSPractice.Template.Create();
    var forNineNine = 99;
    var forData;
    for (forData = 0; forData <= forNineNine; forData++) {
        TSPractice.Data.DataContent.AddData({ Name: "Test" + forData, Value: forData, ChxID: "ChxID" + forData, inputID: "inputID" + forData, spanID: "spanID" + forData });
    }
    MainData.Create();
});
