/// <reference path="scripts/typings/jquery/jquery.d.ts" />
var TSPractice0906;
(function (TSPractice0906) {
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
    TSPractice0906.Template = Template;
    //#endregion
    //#region Data
    var TableContent = (function () {
        function TableContent() {
            this.Data = [];
        }
        TableContent.prototype.AddData = function (p) {
            this.Data.push(p);
        };
        TableContent.prototype.GetData = function () {
            return this.Data;
        };
        return TableContent;
    }());
    TSPractice0906.TableContent = TableContent;
    var Data = (function () {
        function Data() {
        }
        Data.TableContent = new TableContent();
        return Data;
    }());
    TSPractice0906.Data = Data;
    //#endregion
    //#region Form
    var FormCreate = (function () {
        function FormCreate() {
        }
        FormCreate.prototype.GetForm = function () { return this.m_Target; };
        FormCreate.prototype.Create = function () {
            this.m_Target = $("#Formdiv");
            var tmpDataCollect = TSPractice0906.Data.TableContent.GetData();
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
            tmpDataLength = tmpDataCollect.length;
            for (tmpIdx = 0; tmpDataLength--; tmpIdx++) {
                var tmpData = tmpDataCollect[tmpIdx];
                $("#" + tmpData.inputID);
            }
            console.info(Template.TemplateOne, TSPractice0906.Data.TableContent.GetData());
        };
        FormCreate.prototype.Update = function () {
        };
        return FormCreate;
    }());
    TSPractice0906.FormCreate = FormCreate; //#endregion
})(TSPractice0906 || (TSPractice0906 = {})); // End module TSPractice0906
var MainData = new TSPractice0906.FormCreate();
$(function () {
    TSPractice0906.Template.Create();
    var forNineNine = 99;
    var forData;
    for (forData = 0; forData <= forNineNine; forData++) {
        TSPractice0906.Data.TableContent.AddData({ Name: "Test" + forData, Value: forData, ChxID: "ChxID" + forData, inputID: "inputID" + forData, spanID: "spanID" + forData });
    }
    MainData.Create();
});
