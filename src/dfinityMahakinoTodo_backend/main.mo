import List "mo:base/List";
import Debug "mo:base/Debug";

actor DfinityMahakinoTodo {
  type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();
 
};