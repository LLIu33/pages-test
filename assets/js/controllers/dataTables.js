"use strict";

/* Controllers */

angular
  .module("app", ["ui.grid"])
  .controller("AngularUITableCtrl", [
    "$scope",
    function($scope) {
      var cellWidth = 100;
      $scope.gridOptions = {
        enableSorting: false,
        enableFiltering: false,
        enableCellEditOnFocus: false,
        enableColumnMenu: false,
        rowHeight: 50,
        // headerTemplate: '<div class="ui-grid-top-panel" style="text-align: center">I am a Custom Grid Header</div>',
        columnDefs: [
          { name: 'part', width:100},
          { name: 'Other 2', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:cellWidth},
          { name: 'Other 3', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:cellWidth },
          { name: 'Site 4', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:cellWidth },
          { name: 'Other 21', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:cellWidth },
          { name: 'Other 31', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:cellWidth },
          { name: 'Site 2', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:cellWidth },
          { name: 'Other 22', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:cellWidth},
          { name: 'Other 32', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:cellWidth }
        ],
        data:[
          {
            part: "Part 1",
            "Other 2": "Green",
            "Other 3": "Red",
            "Site 4": "Yellow",
            "Other 21": "Yellow",
            "Other 31": "Green",
            "Site 2": "Red",
            "Other 22": "Red",
            "Other 32": "Green"
          },
          {
            part: "Part 2",
            "Other 2": "Red",
            "Other 3": "Green",
            "Site 4": "Yellow",
            "Other 21": "Red",
            "Other 31": "Green",
            "Site 2": "Red",
            "Other 22": "Green",
            "Other 32": "Yellow"
          },
          {
            part: "Part 3",
            "Other 2": "Red",
            "Other 3": "Yellow",
            "Site 4": "Green",
            "Other 21": "Red",
            "Other 31": "Green",
            "Site 2": "Green",
            "Other 22": "Green",
            "Other 32": "Yellow"
          },
          {
            part: "Part 4",
            "Other 2": "Red",
            "Other 3": "Green",
            "Site 4": "Red",
            "Other 21": "Red",
            "Other 31": "Green",
            "Site 2": "Red",
            "Other 22": "Green",
            "Other 32": "Yellow"
          },
          {
            part: "Part 5",
            "Other 2": "Red",
            "Other 3": "Yellow",
            "Site 4": "Red",
            "Other 21": "Red",
            "Other 31": "Green",
            "Site 2": "Green",
            "Other 22": "Green",
            "Other 32": "Yellow"
          },
          {
            part: "Part 6",
            "Other 2": "Green",
            "Other 3": "Red",
            "Site 4": "Yellow",
            "Other 21": "Yellow",
            "Other 31": "Green",
            "Site 2": "Red",
            "Other 22": "Red",
            "Other 32": "Green"
          }
        ]
      }
    }
  ])
