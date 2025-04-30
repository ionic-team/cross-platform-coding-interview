package io.ionic.crossplatform.plugins.todo;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;

import java.util.List;

@CapacitorPlugin(name = "ToDo")
public class ToDoPlugin extends Plugin {

    protected JSArray getMockData() {
        JSArray todos = new JSArray();

        JSObject todo1 = new JSObject();
        todo1.put("id", 1);
        todo1.put("name", "Interview with Ionic");
        todo1.put("dueDate", 1634569785944L);
        todo1.put("done", true);
        todos.put(todo1);

        JSObject todo2 = new JSObject();
        todo2.put("id", 2);
        todo2.put("name", "Create amazing product");
        todo2.put("dueDate", 1634569785944L);
        todo2.put("done", false);
        todos.put(todo2);

        JSObject todo3 = new JSObject();
        todo3.put("id", 3);
        todo3.put("name", "???");
        todo3.put("dueDate", 1634569785944L);
        todo3.put("done", false);
        todos.put(todo3);

        JSObject todo4 = new JSObject();
        todo4.put("id", 4);
        todo4.put("name", "Profit");
        todo4.put("dueDate", 1634569785944L);
        todo4.put("done", false);
        todos.put(todo4);

        return todos;
    }

    @PluginMethod()
    public void getAll(PluginCall call) {
        JSObject result = new JSObject();
        result.put("todos", this.getMockData());
        call.resolve(result);
    }

    @PluginMethod()
    public void getOne(PluginCall call) {
        JSArray todos = this.getMockData();
        int todoId = call.getInt("id");
        try {
            List<JSObject> todoList = todos.toList();
            for (JSObject todo : todoList) {
                if (todo.getInt("id") == todoId) {
                    JSObject result = new JSObject();
                    result.put("todo", todo);
                    call.resolve(result);
                }
            }
        } catch (JSONException e) {
            call.reject(e.getLocalizedMessage());
        }
        call.reject("TODO NOT FOUND");
    }

    @PluginMethod()
    public void upsert(PluginCall call) {
        // TODO: Implement upsert
        call.resolve();
    }

    @PluginMethod()
    public void delete(PluginCall call) {
        // TODO: Implement delete
        call.resolve();
    }
}
