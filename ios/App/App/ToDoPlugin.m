//
//  ToDoPlugin.m
//  App
//
//  Created by Nicholas Hyatt on 10/18/21.
//

#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

CAP_PLUGIN(ToDoPlugin, "ToDo",
    CAP_PLUGIN_METHOD(getAll, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(getOne, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(upsert, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(delete, CAPPluginReturnPromise);
)
