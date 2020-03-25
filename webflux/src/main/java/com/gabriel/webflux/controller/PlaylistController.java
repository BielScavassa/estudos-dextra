package com.gabriel.webflux.controller;

import com.gabriel.webflux.document.Playlist;
import com.gabriel.webflux.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

//@RestController("Webflux")
//@RequestMapping("/webflux")
public class PlaylistController {

    @Autowired
    PlaylistService playlistService;

    @GetMapping("/playlists")
    public Flux<Playlist> getPlaylist() {
        return playlistService.findAll();
    }

    @GetMapping("/playlists/{id}")
    public Mono<Playlist> getPlaylistById(@PathVariable String id) {
        return playlistService.findById(id);
    }

    @PostMapping("/playlists")
    public Mono<Playlist> savePlaylist(@RequestBody Playlist playlist) {
        return playlistService.save(playlist);
    }
}
