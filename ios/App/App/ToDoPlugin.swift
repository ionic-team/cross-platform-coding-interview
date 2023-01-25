//
 //  ToDoPlugin.swift
 //  App
 //
 //  Created by Nicholas Hyatt on 10/18/21.
 //
 import Foundation
 import Capacitor

 var mockedData = [
     1: [
         "id": 1,
         "name": "Interview with Ionic",
         "dueDate": 1634569785944,
         "done": true
     ],
     2: [
         "id": 2,
         "name": "Create amazing product",
         "dueDate": 1634569785944,
         "done": false
     ],
     3: [
         "id": 3,
         "name": "???",
         "dueDate": 1634569785944,
         "done": false
     ],
     4: [
         "id": 4,
         "name": "Profit",
         "dueDate": 1634569785944,
         "done": false
     ],
 ]


 @objc(ToDoPlugin)
 public class ToDoPlugin: CAPPlugin {

     @objc func getAll(_ call: CAPPluginCall) {
         let todos = mockedData.sorted { $0.key < $1.key }.map { $0.value }
         call.resolve(["todos": todos])
     }

     @objc func getOne(_ call: CAPPluginCall) {
         guard let id = call.getInt("id") else {
             call.reject("Malformed request, missing option id")
             return
         }
         call.resolve(["todo": mockedData[id] as Any])
     }

     @objc func upsert(_ call: CAPPluginCall) {
         // TODO: Implement Upsert
         call.resolve()
     }

     @objc func delete(_ call: CAPPluginCall) {
         // TODO: Implement delete()
         call.resolve()
     }
 }
