import React, { useEffect, useMemo, useState } from 'react'
                <h3>Add Player</h3>
                <input value={playerForm.name} onChange={e => setPlayerForm({ ...playerForm, name: e.target.value })} placeholder="Player name" />
                <input value={playerForm.number} onChange={e => setPlayerForm({ ...playerForm, number: e.target.value })} placeholder="Jersey number" />
                <input value={playerForm.position} onChange={e => setPlayerForm({ ...playerForm, position: e.target.value })} placeholder="Position" />
                <input value={playerForm.photo} onChange={e => setPlayerForm({ ...playerForm, photo: e.target.value })} placeholder="Photo URL (optional)" />
                <textarea value={playerForm.bio} onChange={e => setPlayerForm({ ...playerForm, bio: e.target.value })} placeholder="Short bio"></textarea>
                <button type="submit" className="primary-btn full-btn">Save Player</button>
              </form>

              <form className="card admin-card" onSubmit={addGame}>
                <h3>Add Game</h3>
                <input type="date" value={gameForm.date} onChange={e => setGameForm({ ...gameForm, date: e.target.value })} />
                <input value={gameForm.opponent} onChange={e => setGameForm({ ...gameForm, opponent: e.target.value })} placeholder="Opponent" />
                <input value={gameForm.location} onChange={e => setGameForm({ ...gameForm, location: e.target.value })} placeholder="Location" />
                <select value={gameForm.result} onChange={e => setGameForm({ ...gameForm, result: e.target.value })}>
                  <option>Pending</option>
                  <option>Win</option>
                  <option>Loss</option>
                  <option>Tie</option>
                </select>
                <div className="score-row">
                  <input type="number" value={gameForm.teamScore} onChange={e => setGameForm({ ...gameForm, teamScore: e.target.value })} placeholder="Misfits" />
                  <input type="number" value={gameForm.opponentScore} onChange={e => setGameForm({ ...gameForm, opponentScore: e.target.value })} placeholder="Opponent" />
                </div>
                <button type="submit" className="primary-btn full-btn">Save Game</button>
              </form>

              <form className="card admin-card" onSubmit={addStatEntry}>
                <h3>Add Game Stats</h3>
                <select value={statForm.playerId} onChange={e => setStatForm({ ...statForm, playerId: e.target.value })}>
                  <option value="">Select player</option>
                  {players.map(player => (
                    <option key={player.id} value={player.id}>{player.name}</option>
                  ))}
                </select>
                <input type="date" value={statForm.gameDate} onChange={e => setStatForm({ ...statForm, gameDate: e.target.value })} />
                <input value={statForm.opponent} onChange={e => setStatForm({ ...statForm, opponent: e.target.value })} placeholder="Opponent" />
                <div className="score-row">
                  <input type="number" value={statForm.atBats} onChange={e => setStatForm({ ...statForm, atBats: e.target.value })} placeholder="AB" />
                  <input type="number" value={statForm.hits} onChange={e => setStatForm({ ...statForm, hits: e.target.value })} placeholder="H" />
                </div>
                <div className="score-row">
                  <input type="number" value={statForm.runs} onChange={e => setStatForm({ ...statForm, runs: e.target.value })} placeholder="R" />
                  <input type="number" value={statForm.rbis} onChange={e => setStatForm({ ...statForm, rbis: e.target.value })} placeholder="RBI" />
                </div>
                <button type="submit" className="primary-btn full-btn">Save Stats</button>
              </form>

              <form className="card admin-card" onSubmit={addUpdate}>
                <h3>Post Update</h3>
                <input value={updateForm.title} onChange={e => setUpdateForm({ ...updateForm, title: e.target.value })} placeholder="Update title" />
                <textarea value={updateForm.body} onChange={e => setUpdateForm({ ...updateForm, body: e.target.value })} placeholder="Write team update"></textarea>
                <button type="submit" className="primary-btn full-btn">Post Update</button>
              </form>

              <div className="card admin-card">
                <h3>Upload Photo</h3>
                <input type="file" accept="image/*" onChange={uploadPhotoFile} />
                <p>{uploading ? 'Uploading photo...' : 'Choose a team photo to add to the gallery.'}</p>
              </div>

              <div className="card admin-card">
                <h3>Quick Delete</h3>
                <p className="muted">Remove items if needed.</p>
                <div className="delete-list">
                  {updates.slice(0, 5).map(item => (
                    <button key={item.id} className="danger-btn" onClick={() => removeItem('updates', item.id)}>
                      Delete update: {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="card empty-state">Click <strong>Open Admin</strong> near the top of the page.</div>
          )}
        </section>
      </main>
    </div>
  )
}
