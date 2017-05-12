"use strict";

/* Controllers */

angular
  .module("app", ["ui.grid"])
  .controller("AngularUITableCtrl", [
    "$scope",
    function($scope) {
      $scope.gridOptions = {
        enableSorting: false,
        enableFiltering: false,
        enableCellEditOnFocus: false,
        enableColumnMenu: false,
        columnDefs: [
          { name: 'part', width:100},
          { name: 'Other 2', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:100},
          { name: 'Other 3', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:100 },
          { name: 'Site 4', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:100 },
          { name: 'Other 21', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:100 },
          { name: 'Other 31', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:100 },
          { name: 'Site 2', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:100 },
          { name: 'Other 22', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:100},
          { name: 'Other 32', cellTemplate: '<div class="circle-{{grid.getCellValue(row,col)}}" ></div>', width:100 }
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
            part: "Part 3",
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
            part: "Part 4",
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
            part: "Part 4",
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
            part: "Part 5",
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

  // data: [{
  //     part: "Part 1",
  //     sites: [{
  //         site: "Other 2",
  //         status: "Green"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Red"
  //       },
  //       {
  //         site: "Site 4",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       },
  //       {
  //         site: "Site 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       }
  //     ]
  //   },
  //   {
  //     part: "Part 2",
  //     sites: [{
  //         site: "Other 2",
  //         status: "Green"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Red"
  //       },
  //       {
  //         site: "Site 4",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       },
  //       {
  //         site: "Site 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       }
  //     ]
  //   },
  //   {
  //     part: "Part 3",
  //     sites: [{
  //         site: "Other 2",
  //         status: "Green"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Red"
  //       },
  //       {
  //         site: "Site 4",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       },
  //       {
  //         site: "Site 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       }
  //     ]
  //   },
  //   {
  //     part: "Part 4",
  //     sites: [{
  //         site: "Other 2",
  //         status: "Green"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Red"
  //       },
  //       {
  //         site: "Site 4",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       },
  //       {
  //         site: "Site 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       }
  //     ]
  //   },
  //   {
  //     part: "Part 5",
  //     sites: [{
  //         site: "Other 2",
  //         status: "Green"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Red"
  //       },
  //       {
  //         site: "Site 4",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       },
  //       {
  //         site: "Site 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       }
  //     ]
  //   },
  //   {
  //     part: "Part 6",
  //     sites: [{
  //         site: "Other 2",
  //         status: "Green"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Red"
  //       },
  //       {
  //         site: "Site 4",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Yellow"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       },
  //       {
  //         site: "Site 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 2",
  //         status: "Red"
  //       },
  //       {
  //         site: "Other 3",
  //         status: "Green"
  //       }
  //     ]
  //   }
  // ];
